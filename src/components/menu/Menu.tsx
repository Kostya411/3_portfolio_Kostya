import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.styled.tsx";

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
    font-family: "Comfortaa", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    color: #25282b;
    
    
    
`

