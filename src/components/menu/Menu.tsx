import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.styled.tsx";
import {thema} from "../../styles/Thema.tsx";

export const Menu = () => {
    return (
        <MenuStyled>
            <FlexWrapper as ='ul' gap={'48px'}>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
            </FlexWrapper>
        </MenuStyled>
    );
};

const MenuStyled = styled.nav`
    background: transparent;
    & a{
        font-family: "Comfortaa", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;
        color: ${thema.color.grey.second}   
    }
    
    @media ${thema.media.tablet} {
        display: none;
    }
`

