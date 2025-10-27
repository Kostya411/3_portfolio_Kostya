import styled from "styled-components";
import {InputSet} from "./Input.tsx";
import {Button} from "../../../../components/Button.styled.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.styled.tsx";
import {Container} from "../../../../components/Conteiner.styled.tsx";
import {TitleSection} from "../../../../components/TitleSection.styled.tsx";

export const Contact = () => {
    return (
        <ContactStyled>
            <Container>
                <TitleSection>Contact me</TitleSection>
                <ContactContainer>
                    <FlexWrapper as='form' direction={'column'} align={'center'} gap={'24px'}>
                        <InputSet name={'Name'} type={'text'} id={`name`} height={'40px'}/>
                        <InputSet name={'Email'} type={'mail'} id={`email`} height={'40px'}/>
                        <InputSet name={'Message'} type={'textarea'} id={`message`} height={'160px'}/>
                        <Button type="submit">Send</Button>

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
    margin: 0 auto;
    padding: 80px 0 16px 0;

    button {
        align-self: flex-end;
    }
`

