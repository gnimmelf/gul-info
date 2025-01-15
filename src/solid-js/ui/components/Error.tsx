import { Component, JSXElement } from 'solid-js';

export const Error: Component<{
  error: string;
}> = (props) => (
  <div class="error">
    <div>{props.error}</div>
  </div>
);
