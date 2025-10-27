import styled from "styled-components";
import footer from "../../images/footer.svg"
import {FlexWrapper} from "../../../components/FlexWrapper.styled.tsx";

export const Footer = () => {
    return (
        <FooterStyled>
                <FlexWrapper direction={"column"}>
                    <Copyright>Madelyn Torff 2021 </Copyright>
                    <FooterImg src={`${footer}`} alt="footer"/>
                </FlexWrapper>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    text-align: center;
    padding-top: 32px;
`
const Copyright = styled.small`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
`
const FooterImg = styled.img`
    `