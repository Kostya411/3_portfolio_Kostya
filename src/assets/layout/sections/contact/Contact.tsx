import styled from "styled-components";
import {InputSet} from "./Input.tsx";
import {Button} from "../../../../components/Button.styled.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.styled.tsx";
import {Container} from "../../../../components/Conteiner.styled.tsx";
import {TitleSection} from "../../../../components/TitleSection.styled.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";

export const Contact = () => {
    return (
        <ContactStyled>
            <Container>
                <TitleSection>Contact me</TitleSection>
                <ContactContainer>
                    <FlexWrapper as='form' direction={'column'} align={'center'} gap={'24px'}>
                        <InputSet name={'Name'} type={'text'} id={`name`}  height={'40px'}/>
                        <InputSet name={'Email'} type={'mail'} id={`email`}  height={'40px'}/>
                        <InputSet name={'Message'} type={'textarea'} id={`message`}  height={'160px'}/>
                        <Button type="submit">Send</Button>
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
                    </FlexWrapper>
                </ContactContainer>
            </Container>
        </ContactStyled>
    );
};
const ContactStyled = styled.section`

`
const ContactContainer = styled.div`
    max-width: 400px;
    width: 100%;
    margin:0 auto;
    padding: 80px 0 0 0;
    button {
        align-self: flex-end;
    }
`

const Messenger = styled.a `

`
