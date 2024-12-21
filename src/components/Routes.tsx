import { Component } from "solid-js";

import { PageListings } from "./PageListings";
import { useService } from "./ServiceProvider";

export const Routes: Component = (props) => {
  const { api } = useService();

  // const [connected] = createResource(api.state, async (state) => state!);

  return (
    <>
      <PageListings />
    </>
  );
};
