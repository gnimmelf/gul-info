import {
  createStore,
  produce,
  reconcile,
  SetStoreFunction,
  unwrap,
} from 'solid-js/store';
import { deepEqual } from '~/shared/lib/utils';

import { deepCopy } from '~/shared/lib/utils';
import { ZodSchema } from 'zod';

type ValidateErrors = {
  formErrors?: string[];
  fieldErrors?: {
    [key: string]: string[];
  };
};

type InternalState = {
  isDirty: boolean;
  isSubmitted: boolean;
  errors: ValidateErrors;
  touchedFields: string[];
};

const getCleanErrorState = (): ValidateErrors => ({
  formErrors: [],
  fieldErrors: {},
});

export class FormState<T> {
  private _schema!: ZodSchema;
  private _initialShape!: Object;

  private _values: T;
  private _setValues: SetStoreFunction<T>;

  private _state: InternalState;
  private _setState: SetStoreFunction<InternalState>;

  constructor() {
    //@ts-expect-error - Value will be set in `initialize`
    [this._values, this._setValues] = createStore<T>({});
    //@ts-expect-error - Value will be set in `initialize`
    [this._state, this._setState] = createStore<InternalState>({});
  }

  public initialize(initialShape: T, schema: ZodSchema) {
    this._schema = schema;
    this._initialShape = deepCopy(initialShape);
    this._setValues(reconcile(deepCopy(initialShape)));
    this._setState({
      isDirty: false,
      isSubmitted: false,
      errors: getCleanErrorState(),
      touchedFields: [],
    });
  }

  /**
   * Exportable method use by `this.getStore` to overcome typedef issues
   * with SolidJs' immensly complex store-setter defintions.
   * @param args Same as StoreSetter<T>
   */
  private wrappedSetStore(...args: any[]) {
    const prevState = { ...this._values };
    //@ts-expect-error
    this._setValues(...args);

    /**
     * Loop fields and compare new values with old values to find which
     * field's change that triggered this setState
     */
    for (const key in this._values) {
      const isUpdated = this._values[key] !== prevState[key]

      if (isUpdated) {
        // Field qualifies as touched if current value is different from initial value
        const isTouched = !deepEqual(
          //@ts-expect-error
          this._initialShape[key],
          this._values[key],
        );

        this._setState('touchedFields', produce((touchedFields) => {
          if (isTouched) {
            // Mark as touched
            touchedFields.indexOf(key) === -1 && touchedFields.push(key);
          } else {
            // Mark as untouched
            const index = touchedFields.indexOf(key);
            if (index !== -1) {
              touchedFields.splice(index, 1); // Remove the element directly
            }
          }
        }));

        if (this.showError(key)) {
          // Remove field error if field validates
          this.validateField(key);
        }
      }
    }
    this._state.isDirty = this._state.touchedFields.length > 0;
  }

  /**
   * Type workaround. Exports Accessor and Setter for store.
   * - Only known way to keep type definition for setter
   * @returns [store, setStore]
   */
  public getStore() {
    return [
      this._values,
      this.wrappedSetStore.bind(this)
    ] as [T, SetStoreFunction<T>];
  }

  public isDirty() {
    return this._state.isDirty;
  }

  public isTouched(key: string) {
    return (
      !!(this._state.touchedFields?.indexOf(key) > -1) ||
      this._state.isSubmitted
    );
  }

  public validateField(key: string) {
    console.log('validateField', key);
    if (this.isTouched(key)) {
      //@ts-expect-error
      const value = this._values[key];
      //@ts-expect-error
      const res = this._schema.shape[key].safeParse(value);
      if (res.success) {
        // Remove the fieldError
        this._setState(
          'errors',
          'fieldErrors',
          produce((fieldErrors) => {
            delete fieldErrors![key];
          }),
        );
      } else {
        const errors = res.error.flatten().formErrors;
        this._setState('errors', 'fieldErrors', { [key]: errors });
      }
    }
  }

  public validateAll() {
    this._setState('isSubmitted', true);
    console.log(this);
    const res = this._schema.safeParse(unwrap(this._values));
    if (res.success) {
      this._setState('errors', getCleanErrorState());
    } else {
      //@ts-expect-error
      this._setState('errors', res.error.flatten());
    }
    return res.success;
  }

  public get errors() {
    return this._state.errors;
  }

  public showError(key: string) {
    const hasError = this._state.errors?.fieldErrors
      ? !!this._state.errors.fieldErrors[key]
      : false;

    return (this._state.isSubmitted || this.isTouched(key)) && hasError;
  }

  public getFieldError(key: string) {
    return this._state.errors.fieldErrors
      ? this._state.errors.fieldErrors[key].join('. ')
      : null;
  }
}
