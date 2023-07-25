import Regular from "@public/font/GoshaSans-Regular.woff2";
import Bold from "@public/font/GoshaSans-Bold.woff2";
import Ultralight from "@public/font/GoshaSans-Ultralight.woff2";
import Ultrabold from "@public/font/GoshaSans-Ultrabold.woff2";

export const fontFaces = `
    @font-face {
        font-family: "Gosha";
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('GoshaSans'), local('GoshaSans-Regular'), url(${Regular}) format('woff2');
    }
    @font-face {
        font-family: "Gosha";
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local('GoshaSans'), local('GoshaSans-Bold'), url(${Bold}) format('woff2');
    }
    @font-face {
        font-family: "Gosha";
        font-style: normal;
        font-display: swap;
        font-weight: 250;
        src: local('GoshaSans'), local('GoshaSans-Ultralight'), url(${Ultralight}) format('woff2');
    }
    @font-face {
        font-family: "Gosha";
        font-style: normal;
        font-display: swap;
        font-weight: 800;
        src: local('GoshaSans'), local('GoshaSans-Ultrabold'), url(${Ultrabold}) format('woff2');
    }
`;
