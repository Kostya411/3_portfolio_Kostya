import styled from "styled-components";
import {   InputSet} from "./Input.tsx";
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
                    <FlexWrapper as = 'form' direction={'column'} align={'center'}>
                        <InputSet name={'Name'} type={'text'} id={`name`}/>
                        <InputSet name={'Email'} type={'mail'} id={`email`}/>
                        <InputSet name={'Message'} type={'textarea'} id={`message`}/>
                        <Button type="submit">Submit</Button>
                        <FlexWrapper justify="center">
                            <Icon iconId={"instagram"}/>
                            <Icon iconId={"linkedIn"}/>
                            <Icon iconId={"mail"}/>
                        </FlexWrapper>
                    </FlexWrapper>
            </Container>
        </ContactStyled>
    )
        ;
};
const ContactStyled = styled.section`
`
