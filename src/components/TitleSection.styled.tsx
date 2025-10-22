import styled from "styled-components";

export const TitleSection = styled.h2 `
    
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
    color: #25282b;
    
    &::after {
        content: '';
        display: block;
        margin: 0 auto;
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background: #fdc435;
    }
`