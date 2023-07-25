import { Colors } from "../variables";

export const button = {
    defaultProps: {
        disableRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
    },
    styleOverrides: {
        root: {
            borderRadius: "0",
            padding: "10px 32px",
            fontWeight: "700",
            fontSize: "12px",
            "@media screen and (min-width: 991px)": {
                fontSize: "24px",
            }
        }
    }
};
