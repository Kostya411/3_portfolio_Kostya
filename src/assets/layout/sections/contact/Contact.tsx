import styled from "styled-components";
import {Input} from "./Input.styled.tsx";
import {SectionTitle} from "../../../../components/Title.styled.tsx";
import {Button} from "../../../../components/Button.styled.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.styled.tsx";
import {Container} from "../../../../components/Conteiner.styled.tsx";

export const Contact = () => {
    return (
        <ContactStyled>
            <Container>
                {/*<SectionTitle>Contact</SectionTitle>*/}
                <StyledForm>
                    <FlexWrapper direction={'column'} align={'center'}>
                        <Input/>
                        <Input/>
                        <Input />
                        <Button type="submit">Submit</Button>
                    </FlexWrapper>
                </StyledForm>
            </Container>
        </ContactStyled>
    )
        ;
};
const ContactStyled = styled.section`
`
const StyledForm = styled.form`
    border: 1px solid blue;
`