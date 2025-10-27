import styled, {css} from "styled-components";
import {FlexWrapper} from "../FlexWrapper.styled.tsx";
import {thema} from "../../styles/Thema.tsx";

export const MobileMenu = () => {
    return (
        <MenuMobileStyled>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MenuPopup isOpen={true}>
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

const MenuMobileStyled = styled.nav<{isOpen:boolean}>`
    display: none;
    ${props => props.isOpen && css <(isOpen: boolean)>`
    `}
    
`

const BurgerButton = styled.button`
    position: fixed;
    width: 100px;
    height: 100px;
    right: -50px;
    top: -50px;

    span {
        display: block;
        width: 18px;
        height: 2px;
        color: ${thema.color.grey.second}
        position: absolute;
        left: 30px;
        bottom: 30px;

        &::before {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            color: ${thema.color.grey.second}
            position: absolute;
            transform: translateY(-6px);
        }

        &::after {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            color: ${thema.color.grey.second}
            position: absolute;
            transform: translateY(6px);
        }
    }
`

const MenuPopup = styled.div<{isOpen:boolean}>`
    position: fixed;
    background-color: ${thema.color.primary};
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999999;

    & a {
        font-family: "Comfortaa", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;
        color: ${thema.color.grey.second}
    }
`

