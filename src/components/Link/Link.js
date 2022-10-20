import React from "react";

const Link = props => {
    let href = props.href;
    let rel = props.rel ?? "noreferrer noopener";
    let target = props.target ?? "_blank";
    let text = props.text;

    return (
        <a href={href} rel={rel} target={target}>{text}</a>
    );
}

export default Link;