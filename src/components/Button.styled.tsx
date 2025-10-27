import styled from "styled-components";
import {thema} from "../styles/Thema.tsx";

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    border: 2px solid ${thema.color.grey.second};
    border-radius: 8px;
    padding: 8px 24px;
    vertical-align: center;
    width: fit-content;

    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: ${thema.color.grey.second};
    
    &:hover {
        background-color: ${thema.color.primary};
        border: 2px solid transparent;
    }
`