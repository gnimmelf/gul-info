import { Component, getOwner } from "solid-js";
import { throwToOwner } from "~/lib/utils";

/**
 * Component that tracks scope and runs a function
 * @param props.func Function to run in scope
 * @returns
 */
export const Track: Component<{
  func: Function;
}> = (props) => {
  const owner = getOwner();
  props.func().catch(throwToOwner(owner!));
  return null;
};
