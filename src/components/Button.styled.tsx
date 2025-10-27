import styled from "styled-components";

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    border: 2px solid #25282b;
    border-radius: 8px;
    padding: 8px 24px;
    vertical-align: center;
    width: fit-content;

    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #25282b;
    
    &:hover {
        background-color: #fdc435;
        border: 2px solid transparent;
    }
`