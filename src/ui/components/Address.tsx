import { Component, createSignal } from 'solid-js';

import { join, styler } from '~/ui/lib/styler';

export const Address: Component<{
  address: string;
  zip: string;
  muncipiality: string;
}> = (props) => {
  return (
    <>
      {props.address}
      <br />
      {props.zip} {props.muncipiality}
    </>
  );
};
