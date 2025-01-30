import { JSX, Show } from 'solid-js';
import { FormState } from '~/solid-js/lib/FormState';

export type FormFieldProps<T> = {
  key: keyof T | string;
  formState: FormState<T>;
  class?: string;
  hideError?: boolean;
  children: (key: keyof T) => JSX.Element;
};

export const FormField = <T,>(props: FormFieldProps<T>) => {
  return (
    <div class={props.class || ''}>
      {props.children(props.key as keyof T)}
      <Show
        when={
          !props.hideError &&
          props.formState.showFieldError(props.key as string)
        }
      >
        <div>{props.formState.getErrorMessage(props.key as string)}</div>
      </Show>
    </div>
  );
};
