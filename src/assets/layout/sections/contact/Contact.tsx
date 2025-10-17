import styled from "styled-components";
import {Input} from "./Input.styled.tsx";
import {SectionTitle} from "../../../../components/SectionTitle.styled.tsx";
import {Button} from "../../../../components/Button.styled.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.styled.tsx";

export const Contact = () => {
    return (
        <ContactStyled>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Input />
                    <Input />
                    <Input as={"textarea"}  />
                    <Button type="submit">Submit</Button>
                </FlexWrapper>
            </StyledForm>

        </ContactStyled>
    );
};
const ContactStyled = styled.section`
`
const StyledForm = styled.form`
border: 1px solid blue;
`