import {createGlobalStyle} from "styled-components";
import {thema} from "./Thema.tsx";


export const GlobalStyles = createGlobalStyle`
 
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${thema.color.light.third};
        overflow: hidden; 
        position: relative;
    }
    
    button {
        border: none;
        outline: none;
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        line-height: 0;
    }

    ul {
        list-style: none;
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
    
`