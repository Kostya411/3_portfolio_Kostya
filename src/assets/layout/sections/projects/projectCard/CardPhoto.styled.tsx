import styled from "styled-components";
import {thema} from "../../../../../styles/Thema.tsx";

export const CardPhoto = styled.img `
    max-width: 50%;
    max-height: 524px;
    object-fit: cover;
    @media ${thema.media.tablet} {
        max-width: 100%;
    }
   
    
    
`