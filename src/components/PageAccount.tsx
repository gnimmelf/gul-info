import { Component } from "solid-js";

import { join, styler } from "~/lib/styler";

const css = styler.css({

});

export const PageAccount: Component<{
    title?: string;
}> = (props) => {
    return (
        <section>
            <h2>PageAccount</h2>
        </section>
    );
};
