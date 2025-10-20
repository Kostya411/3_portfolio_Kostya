import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
 
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
    }
    
    button {
        border: none;
        outline: none;
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
    
`