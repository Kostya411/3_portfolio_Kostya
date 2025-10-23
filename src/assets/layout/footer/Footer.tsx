import styled from "styled-components";
import {Container} from "../../../components/Conteiner.styled.tsx";

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <Copyright>Madelyn Torff 202123 </Copyright>
            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
`
const Copyright = styled.small``