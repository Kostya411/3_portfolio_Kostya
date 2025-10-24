import styled from "styled-components";
import {Container} from "../../../components/Conteiner.styled.tsx";
import footer from "../../images/footer.svg"
import {FlexWrapper} from "../../../components/FlexWrapper.styled.tsx";

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FlexWrapper>
                    <Copyright>Madelyn Torff 2021 </Copyright>
                    <FooterImg src={`${footer}`} alt="footer"/>
                </FlexWrapper>

            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    text-align: center;
    padding-top: 32px;
`
const Copyright = styled.small`
`
const FooterImg = styled.img`
    `