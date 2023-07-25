import { createTheme } from "@mui/material/styles";
import { cssResets, typography, fontFaces } from "./core";
import { button } from "./components";
import { palette } from "./helpers";

export const DodjiNaBasketTheme = createTheme({
    palette: {
        ...palette
    },
    typography: {
        fontFamily: ["Gosha"],
        ...typography,
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variant: "caption",
                component: "p"
            },
        },
        MuiCssBaseline: {
            styleOverrides: [
                fontFaces,
                {
                    ...cssResets,
                },
            ],
        },
        MuiButton: button,
    },
});
