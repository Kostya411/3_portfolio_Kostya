import styled from "styled-components";
import {thema} from "../styles/Thema.tsx";

export const TitleSection = styled.h2 `
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
    color: ${thema.color.grey.second};
    
    &::after {
        content: '';
        display: block;
        margin: 0 auto;
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background: ${thema.color.primary};
    }
`