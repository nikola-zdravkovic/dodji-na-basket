import { Colors } from "../variables";

export const palette = {
    common: {
        black: Colors.BLACK,
        white: Colors.WHITE,
    },
    primary: {
        main: Colors.PRIMARY,
        contrastText: Colors.NETURAL_9,
    },
    secondary: {
        main: Colors.SECONDARY,
        contrastText: Colors.NETURAL_9,
    },
    text: {
        primary: Colors.WHITE,
        secondary: Colors.NETURAL_4,
        disabled: Colors.NETURAL_5,
    },
    background: {
        paper: Colors.NETURAL_9,
        default: Colors.BLACK,
    },
    gray: {
        50: "#FFFFFF",
        100: "#FCFCFD",
        200: "#F4F5F6",
        300: "#E6E8EC",
        400: "#B1B5C3",
        500: "#777E90",
        600: "#353945",
        700: "#23262F",
        800: "#141416",
        900: "#141416",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161",
    },
    netural: {
        netural1: Colors.NETURAL_1,
        netural2: Colors.NETURAL_2,
        netural3: Colors.NETURAL_3,
        netural4: Colors.NETURAL_4,
        netural5: Colors.NETURAL_5,
        netural6: Colors.NETURAL_6,
        netural7: Colors.NETURAL_7,
        netural8: Colors.NETURAL_8,
        netural9: Colors.NETURAL_9,
    },
    divider: "rgba(255, 255, 255, .25)",
    tonalOffset: 0.2,
    contrastThreshold: 3,
};
