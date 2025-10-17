import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.styled.tsx";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterStyled>
            <FlexWrapper justify="center">
                <Icon iconId={"instagram"}/>
                <Icon iconId={"linkedIn"}/>
                <Icon iconId={"mail"}/>
            </FlexWrapper>
            <Copyright>Madelyn Torff 2021 </Copyright>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
`
const Copyright = styled.small``