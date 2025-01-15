import { Component, createSignal } from 'solid-js';

export const Phone: Component<{
  phoneNumber: string;
}> = (props) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.phoneNumber);
  };
  const triggerCall = () => {
    // Use window.location to simulate clicking the link
    window.location.href = `tel:${props.phoneNumber}`;
  };

  return (
    <sl-dropdown>
      <sl-button prop:slot="trigger" prop:caret={true}>
        <sl-icon slot="prefix" prop:name="telephone" />
        {props.phoneNumber}
      </sl-button>
      <sl-menu>
        <sl-menu-item on:click={copyToClipboard}>
          <sl-icon slot="prefix" prop:name="copy" />
          Copy
        </sl-menu-item>
        <sl-menu-item on:click={triggerCall}>
          <sl-icon slot="prefix" prop:name="telephone" />
          Call
        </sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  );
};
