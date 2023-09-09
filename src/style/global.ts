import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: rgba(0, 255, 255, 1);
    --purple-600: #808080;
    --purple-900: #155615;

    --font-black:#1c1c1c;
    --font-white: #fff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    //1rem=16pixels
    @media(max-widht: 1080px) {
        font-size: 93.75%;//1rem=15px
    }
    @media(max-widht: 720px) {
        font-size: 87.5%;//1rem=14px
    }
}
`
;