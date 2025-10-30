import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.styled.tsx";
import {thema} from "../../../styles/Thema.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <FooterStyled>
                <FlexWrapper direction={"column"}>
                    <FlexWrapper justify="center" gap={'24px'}>
                        <Messenger href={'#'}>
                            <Icon iconId={"instagram"} width={'48px'} height={'48px'} viewBox={'0 0 48px 48px'}/>
                        </Messenger>
                        <Messenger href={'#'}>
                            <Icon iconId={"linkedIn"} width={'48px'} height={'48px'} viewBox={'0 0 48px 48px'}/>
                        </Messenger>
                        <Messenger href={'#'}>
                            <Icon iconId={"mail"} width={'48px'} height={'48px'} viewBox={'0 0 48px 48px'}/>
                        </Messenger>
                    </FlexWrapper>
                    <Copyright>Madelyn Torff 2021 </Copyright>
                </FlexWrapper>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    text-align: center;
    padding-bottom: 240px;
    padding-top: 40px;
    background-image: url("./footer.svg");
`
const Copyright = styled.small`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${thema.color.grey.first};
`

const Messenger = styled.a`
    padding-bottom: 32px;
`