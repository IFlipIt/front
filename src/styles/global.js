import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    #root {
        height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', serif;
        font-size: 16px;
    }


    a {
        text-decoration: none;
    }


    button, a {
        cursor: pointer;
        transition: filter 0.2s;      
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }


`;
