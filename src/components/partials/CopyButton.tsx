import { Component, createSignal, JSXElement } from "solid-js";

import { join, styler } from "~/lib/styler";

const css = styler.css({
    icon: ({

    })
});

export const CopyButton: Component<{
    value: string
}> = (props) => {
    return (
        <sl-icon-button prop:name="copy" prop:label="Copy" />
    )
}