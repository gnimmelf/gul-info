import { Component, createSignal, JSXElement } from "solid-js";

import { join, styler } from "~/lib/styler";
import { IconLabel } from "./IconLabel";

export const WebLink: Component<{
    link: {
        href: string
    },
}> = (props) => {
    const {pathname, hostname} = new URL(props.link.href)
    const link = {
        icon: 'globe',
        title: 'Website'
    }
    if (hostname.match(/facebook\.(no|com)/)) {
        link.icon = 'facebook'
        link.title = 'Facebook'
    }
    else if (hostname.match(/instagram\.(no|com)/)) {
        link.icon = 'instagram'
        link.title = `@${pathname.split('/').pop()}`
    }
    else if (hostname.match(/linkedin\.(no|com)/)) {
        link.icon = 'linkedin'
        link.title = 'LinkedIn'
    }

    return (
        <IconLabel icon={link.icon} label={hostname}>
            <a href={props.link.href} target="_blank">{link.title}</a>
        </IconLabel>
    )
}