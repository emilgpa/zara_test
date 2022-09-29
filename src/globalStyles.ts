import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    html, body {
        height: 100%;
        margin: 0;
    }

    a {
        color: white;
        text-decoration: underline;
    }

    * {
        box-sizing: border-box;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1280px;
        width: 100%;
        margin: auto;
    }
`;

export default GlobalStyle;