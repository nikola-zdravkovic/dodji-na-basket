import { Colors } from "../variables";

export const cssResets = {
    html: {
        WebkitTextSizeAdjust: "100% !important",
    },
    "*": {
        margin: 0,
        padding: 0,
        outline: "none",
        boxSizing: "border-box",
        "&[contenteditable]": {
            userSelect: "text",
        },
    },
    body: {
        position: "relative",
        overflowX: "hidden",
        backgroundColor: Colors.BLACK,
        color: Colors.WHITE,
        backgroundImage: "url(/images/bg-scratch.png)",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    "img, embed, object, video": {
        maxWidth: "100%",
        height: "auto",
    },
    ul: {
        padding: 0,
        margin: 0,
    },
    a: {
        textDecoration: "none",
        cursor: "pointer",
    },
    form: {
        width: "100%",
    },
    span: {
        wordWrap: "break-word",
    },
    hr: {
        boxSizing: "content-box",
        height: "1px",
        overflow: "visible",
        background: "rgba(255, 255, 255, .25)",
        width: "100%",
        margin: "25px 0",
    },
    code: {
        "& span": {
            whiteSpace: "pre-wrap",
        },
    },
    ":focus-visible": {
        outline: "2px solid #3772FF",
        borderRadius: "4px",
    },
};
