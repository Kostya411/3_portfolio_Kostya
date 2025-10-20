import {Logo} from "./logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import styled from "styled-components";
import {Container} from "../../../components/Conteiner.styled.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.styled.tsx";

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} padding={'12px 120px'}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.header`
//    ______
`



