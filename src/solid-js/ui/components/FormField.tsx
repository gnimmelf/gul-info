import { JSX, Show } from 'solid-js';
import { FormState } from '~/solid-js/lib/FormState';

export type FormFieldProps<T> = {
  key: keyof T | string;
  formState: FormState<T>;
  class?: string;
  children: (key: keyof T | string) => JSX.Element;
};

export const FormField = <T,>(props: FormFieldProps<T>) => {
  return (
    <div class={props.class || ''}>
      {props.children(props.key)}
      <Show when={props.formState.showFieldError(props.key as string)}>
        <div>Error: {props.formState.getFieldError(props.key as string)}</div>
      </Show>
    </div>
  );
};
