import styled from "styled-components";
import {TitleContainer} from "./TitleContainer.styled.tsx";
import {MyNameContainer} from "./MyNameContainer.styled.tsx";
import {TextContainer} from "./TextContainer.styled.tsx";
import {Button} from "../../../../../components/Button.styled.tsx";
import {FlexWrapper} from "../../../../../components/FlexWrapper.styled.tsx";


export const MainTextContainer = () => {
    return (
        <MainTextContainerStyled>
            <FlexWrapper direction={'column'} align = 'flex-start'>
                <TitleContainer>Software Developer</TitleContainer>
                <MyNameContainer>Hello, my name is Vahid Navazan</MyNameContainer>
                <TextContainer>Short text with details about you, what you do or your professional career. You can add
                    more information on the about page.</TextContainer>
                <FlexWrapper gap = {'12px'}>
                    <Button as={"a"}>Projects </Button>
                    <Button as={"a"}>LinkedIn </Button>

                </FlexWrapper>
            </FlexWrapper>
        </MainTextContainerStyled>
    )
}

const MainTextContainerStyled = styled.div`
    max-width: 508px;
    
`