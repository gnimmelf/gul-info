import { Component } from 'solid-js';

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
