import { IssueData, ZodSchema } from 'zod';
import {
  createStore,
  produce,
  reconcile,
  SetStoreFunction,
  Store,
  unwrap,
} from 'solid-js/store';
import { getProperty } from 'dot-prop';

import {
  deepCopy,
  toDotPath,
  fromDotPath,
  isPrimitive,
} from '~/shared/lib/utils';

import { zodDeepPick } from '~/shared/zod/helpers';

type InternalState = {
  isDirty: boolean;
  didValidateAll: boolean;
  errors: IssueData[];
  touchedFields: string[];
  validatingFields: string[];
  validatedFields: string[];
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

  public initialize({ initialValues, schema }: { initialValues: SchemaType, schema: ZodSchema }) {
    this._schema = schema;
    this._initialValues = deepCopy(initialValues);
    this._setValues(reconcile(deepCopy(initialValues)));
    this._setState({
      isDirty: false,
      didValidateAll: false,
      errors: [],
      touchedFields: [],
      validatingFields: [],
      validatedFields: [],
    });
  }

  /**
   * Type defintion workaround. Exports Accessor and Setter for store.
   * - Only known way to keep type definition for setter
   * @returns [store, setStore]
   */
  public getStore() {
    return [this._values, this.setValue.bind(this)] as [
      Store<SchemaType>,
      SetStoreFunction<SchemaType & { [x: string]: any }>,
    ];
  }

  public get errors() {
    return this._state.errors.length
      ? unwrap(this._state.errors)
      : null;
  }

  /**
   * Add or remove touched field. Set `isDirty`.
   * @param dotPath
   * @param isTouched
   */
  private setIsTouched(dotPath: string, isTouched: boolean) {
    this._setState(
      'touchedFields',
      produce((touchedFields) => {
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
      }),
    );
    this._setState('isDirty', this._state.touchedFields.length > 0);
  }

  /**
   * Add or remove field from having isValidating status
   * @param dotPath
   * @param isValidating
   */
  private setIsValidating(dotPath: string, isValidating: boolean) {
    this._setState(
      'validatingFields',
      produce((validatingFields) => {
        if (isValidating) {
          // Mark as touched
          if (validatingFields.indexOf(dotPath) === -1) {
            validatingFields.push(dotPath); // `produce` => Add the element directly
          }
        } else {
          // Mark as untouched
          const index = validatingFields.indexOf(dotPath);
          if (index !== -1) {
            validatingFields.splice(index, 1); // `produce` => Remove the element directly
          }
        }
      }),
    );
  }

  /**
   * Add or remove field from having isValidating status
   * @param dotPath
   * @param isValidating
   */
  private setIsValidated(dotPath: string, isValidated: boolean) {
    this._setState(
      'validatedFields',
      produce((validatedFields) => {
        if (isValidated) {
          // Add to validated
          if (validatedFields.indexOf(dotPath) === -1) {
            validatedFields.push(dotPath); // `produce` => Add the element directly
          }
        } else {
          // Remove from validated
          const index = validatedFields.indexOf(dotPath);
          if (index !== -1) {
            validatedFields.splice(index, 1); // `produce` => Remove the element directly
          }
        }
      }),
    );
  }

  /**
   * Exportable method use by `this.getStore()` to overcome typedef issues
   * with SolidJs' immensly complex store-setter defintion.
   * @param args Same as StoreSetter<SchemaType>
   */
  private setValue(dotPath: string, value: any) {
    const path = fromDotPath(dotPath);
    //@ts-expect-error
    this._setValues(...path, value);

    if (isPrimitive(value)) {
      // Only tracking leaf values.
      const initialValue: any = getProperty(this._initialValues, dotPath, '');
      const isTouched = initialValue !== value;

      this.setIsTouched(dotPath, isTouched);

      // Revalidate to remove error while typing
      if (this.hasErrors(dotPath)) {
        this.validateField(dotPath);
      }
    }
  }

  public validateField(dotPath: string) {
    const isTouched = this.isTouched(dotPath);

    if (!isTouched) {
      this.setIsValidating(dotPath, false);
      this.setIsValidated(dotPath, false);
      this._setState('errors', (errors) =>
        errors.filter(({ path }) => toDotPath(...path!) !== dotPath),
      );
    } else {
      const value = getProperty(this._values, dotPath);

      const fieldSchema = zodDeepPick(this._schema, dotPath);
      const res = fieldSchema.safeParse(value);

      // Update errors
      this._setState(
        'errors',
        produce((errors) => {
          const errorIdx = errors.findIndex((error) => {
            //@ts-expect-error
            const found = toDotPath(error.path) === dotPath;
            return found;
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
                path: fromDotPath(dotPath),
              };
              // `produce` => Add the element directly
              errors.unshift(issue);
            }
          }
        }),
      );

      // After validation, recheck errors
      const hasErrors = this.hasErrors(dotPath);
      this.setIsValidating(dotPath, isTouched && hasErrors);
      this.setIsValidated(dotPath, !hasErrors);
    }
  }

  public validateAll() {
    this._setState({
      didValidateAll: true,
    });
    const res = this._schema.safeParse(unwrap(this._values));
    if (res.success) {
      this._setState('errors', []);
    } else {
      this._setState('errors', res.error.issues);
    }
    return res.success;
  }

  public isDirty() {
    return this._state.isDirty;
  }

  /**
   * Check if value is edited
   * @param dotPath
   * @returns boolean
   */
  public isTouched(dotPath: string) {
    return Boolean(this._state.touchedFields?.indexOf(dotPath) > -1);
  }

  /**
   * Check if value has validated without errors
   * @param dotPath
   * @returns boolean
   */
  public isValidated(dotPath: string) {
    return Boolean(this._state.validatedFields?.indexOf(dotPath) > -1);
  }

  /**
   * Check if value is touched and has errors
   * @param dotPath
   * @returns boolean
   */
  public isValidating(dotPath: string) {
    return Boolean(this._state.validatingFields?.indexOf(dotPath) > -1);
  }

  /**
   * Check if values is valid
   * @param dotPath
   * @returns boolean
   */
  public isValid(dotPath: string) {
    return (
      this.isTouched(dotPath) &&
      this.isValidated(dotPath) &&
      !this.isValidating(dotPath)
    );
  }

  /**
   * Check to display error
   * @param dotPath
   * @returns boolean
   */
  public showFieldError(dotPath: string) {
    return (
      this.isValidating(dotPath) ||
      (this._state.didValidateAll && this.hasErrors(dotPath))
    );
  }

  /**
   * Checks if there are any errors.
   * - With dotpath: on or below the given dotpath
   * @param dotPath string
   * @returns boolean
   */
  public hasErrors(dotPath?: string) {
    if (dotPath) {
      const parts = fromDotPath(dotPath);

      return this._state.errors?.some(({ path }) => {
        if (path!.length < parts.length) return false; // Ensure path is at least as deep as dotPath

        return parts.every((part, index) => path![index] === part);
      });
    }
    // No dotPath passed
    return Boolean(this._state.errors.length);
  }

  /**
   * Get the error-message for a dotPath
   * @param dotPath string dotPath to error.message
   * @returns undefined | string
   */
  public getErrorMessage(dotPath: string) {
    //@ts-expect-error
    return this._state.errors?.find(({ path }) => toDotPath(path) === dotPath)
      ?.message;
  }

  /**
   * Retives a list of errors on or below a given (partial) dotpath
   * @param dotPath partial dotPath
   * @returns string[]
   */
  public getErrorMessages(dotPath: string): string[] {
    const parts = fromDotPath(dotPath);

    return [
      ...new Set(
        this._state.errors
          ?.filter(({ path }) => {
            if (path!.length < parts.length) return false; // Ensure path is at least as deep as dotPath
            return parts.every((part, index) => path![index] === part);
          })
          .map(({ message }) => message) || [],
      ),
    ] as string[];
  }
}
