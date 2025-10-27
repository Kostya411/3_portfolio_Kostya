import styled from "styled-components";
import {thema} from "../../../../../../styles/Thema.tsx";

export const CardView = styled.a`
    border: 1px solid ${thema.color.grey.second};
    border-radius: 24px;
   
    padding: 8px 24px;
    width: fit-content;
    vertical-align: center;
    text-align: center;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: ${thema.color.grey.second};
    

    &:hover {
        background-color: ${thema.color.primary};
        border: 1px solid transparent;
    }
`