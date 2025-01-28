import {
  createStore,
  produce,
  reconcile,
  SetStoreFunction,
  Store,
  unwrap,
} from 'solid-js/store';
import {
  deepCopy,
  toDotPath,
  fromDotPath,
  isPrimitive
} from '~/shared/lib/utils';
import { getProperty } from 'dot-prop';

import { IssueData, ZodSchema } from 'zod';
import { zodDeepPick } from '~/shared/lib/zod/helpers';

type InternalState = {
  isDirty: boolean;
  didValidateAll: boolean;
  errors: IssueData[];
  touchedFields: string[];
};


/**
 * Dynamic form state tracker based around zod schema and solidJs store.
 * Caveat:
 * - Only validates on root-level of schema,
 * - Errors on nested values will show as root prop errors
 */
export class FormState<SchemaType> {
  private _schema!: ZodSchema<any>;
  private _initialValues!: Object;

  private _values: SchemaType;
  private _setValues: SetStoreFunction<SchemaType>;

  private _state: InternalState;
  private _setState: SetStoreFunction<InternalState>;

  constructor() {
    //@ts-expect-error - Value will be set in `initialize`
    [this._values, this._setValues] = createStore<SchemaType>({});
    //@ts-expect-error - Value will be set in `initialize`
    [this._state, this._setState] = createStore<InternalState>({});
  }

  public initialize(initialValues: SchemaType, schema: ZodSchema) {
    this._schema = schema;
    this._initialValues = deepCopy(initialValues);
    this._setValues(reconcile(deepCopy(initialValues)));
    this._setState({
      isDirty: false,
      didValidateAll: false,
      errors: [],
      touchedFields: [],
    });
  }

  /**
   * Type defintion workaround. Exports Accessor and Setter for store.
   * - Only known way to keep type definition for setter
   * @returns [store, setStore]
   */
  public getStore() {
    return [
      this._values,
      this.setValue.bind(this)
    ] as [Store<SchemaType>, SetStoreFunction<SchemaType & { [x: string]: any }>];
  }

  /**
   * Exportable method use by `this.getStore()` to overcome typedef issues
   * with SolidJs' immensly complex store-setter defintion.
   * @param args Same as StoreSetter<SchemaType>
   */
  private setValue(dotPath: string, value: any) {
    const path = fromDotPath(dotPath)
    //@ts-expect-error
    this._setValues(...path, value);

    if (isPrimitive(value)) {
      // Only tracking leaf values.
      const initialValue: any = getProperty(this._initialValues, dotPath, '');
      const isTouched = initialValue !== value;

      this._setState('touchedFields', produce((touchedFields) => {
        if (isTouched) {
          // Mark as touched
          if (touchedFields.indexOf(dotPath) === -1) {
            touchedFields.push(dotPath); // `produce` => Add the element directly
          }
        } else {
          // Mark as untouched
          const index = touchedFields.indexOf(dotPath);
          if (index !== -1) {
            touchedFields.splice(index, 1); // `produce` => Remove the element directly
          }
        }
      }));

      // Remove field error if field validates
      this.validateField(dotPath);
    }
    this._setState('isDirty', this._state.touchedFields.length > 0);
  }

  private shouldValidateField(dotPath: string) {
    return (
      !!(this._state.touchedFields?.indexOf(dotPath) > -1) ||
      this._state.didValidateAll
    );
  }

  public validateField(dotPath: string) {
    if (this.shouldValidateField(dotPath)) {
      const value = getProperty(this._values, dotPath);

      console.log({ dotPath, value, schema: this._schema, values: unwrap(this._values) })

      const fieldSchema = zodDeepPick(this._schema, dotPath);

      const res = fieldSchema.safeParse(value)

      this._setState('errors', produce((errors) => {

        const errorIdx = errors.findIndex((error) => {
          //@ts-expect-error
          const found = toDotPath(error.path) === dotPath;
          return found
        });

        if (res.success) {
          if (errorIdx > -1) {
            // `produce` => Remove the element directly
            errors.splice(errorIdx, 1);
          }
        } else {
          if (errorIdx === -1) {
            const issue = {
              ...res.error.issues[0],
              path: fromDotPath(dotPath)
            }
            // `produce` => Add the element directly
            errors.unshift(issue)
          }
        }
      }));
    }
  }

  public validateAll() {
    this._setState('didValidateAll', true);
    console.log(this);
    const res = this._schema.safeParse(unwrap(this._values));
    if (res.success) {
      this._setState('errors', []);
    } else {
      this._setState('errors', res.error.issues);
    }
    return res.success;
  }

  public get errors() {
    return this._state.errors;
  }

  public isDirty() {
    return this._state.isDirty;
  }

  public showFieldError(dotPath: string) {
    const hasError = !!this.getFieldError(dotPath)
    return (this._state.didValidateAll || this.shouldValidateField(dotPath)) && hasError;
  }

  public getFieldError(dotPath: string) {
    return this._state.errors?.find((error) => toDotPath(error.path) === dotPath)?.message
  }
}
