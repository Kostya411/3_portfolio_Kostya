import styled, {css} from "styled-components";
import {FlexWrapper} from "../FlexWrapper.styled.tsx";
import {thema} from "../../styles/Thema.tsx";

export const MobileMenu = () => {
    return (
        <MenuMobileStyled>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MenuPopup isOpen={false}>
                <FlexWrapper as='ul' gap={'48px'} direction={'column'}>
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
            </MenuPopup>
        </MenuMobileStyled>
    );
};

const MenuMobileStyled = styled.nav`
    display: none;
    @media ${thema.media.tablet} {
        display: block;
    };
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
   
    
    z-index: 999;
    background-color: ${thema.color.primary};

    span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: ${thema.color.grey.second};
        position: absolute;
        
        

        ${props => props.isOpen && css <{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            background-color: ${thema.color.grey.second};
            position: absolute;
            transform: translateY(-6px);
            
            ${props => props.isOpen && css <{ isOpen: boolean }>`
             transform: rotate(-45deg) translateY(0);
        `}
        }

        &::after {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            background-color: ${thema.color.grey.second};
            position: absolute;
            transform: translateY(6px);
            
            ${props => props.isOpen && css <{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
        `}
        }
    }
`

const MenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${thema.color.primary};
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    display: none;

    ${props => props.isOpen && css <{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    & a {
        font-family: "Comfortaa", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;
        color: ${thema.color.grey.second}
    }
`

