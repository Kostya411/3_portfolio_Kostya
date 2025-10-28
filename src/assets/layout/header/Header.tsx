import {Logo} from "./logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import styled from "styled-components";
import {Container} from "../../../components/Conteiner.styled.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.styled.tsx";
import {MobileMenu} from "../../../components/mobileMenu/MobileMenu.tsx";

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.header`
    background: transparent;
    z-index: 10;
`



