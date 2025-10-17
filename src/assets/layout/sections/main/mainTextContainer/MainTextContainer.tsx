import styled from "styled-components";
import {TitleContainer} from "./TitleContainer.styled.tsx";
import {MyNameContainer} from "./MyNameContainer.styled.tsx";
import {TextContainer} from "./TextContainer.styled.tsx";
import {Button} from "../../../../../components/Button.styled.tsx";



export const MainTextContainer = () => {
    return (
        <MainTextContainerStyled>
                <TitleContainer>Software Developer</TitleContainer>
                <MyNameContainer>Hello,  my name is Vahid Navazan</MyNameContainer>
                <TextContainer>Short text with details about you, what you do or your professional career. You can add more information on the about page.</TextContainer>
                <BtnMainStyled>
                    <Button as={"a"}>Projects    </Button>
                    <Button as={"a"}>LinkedIn  </Button>
                </BtnMainStyled>
        </MainTextContainerStyled>
    )
}

const MainTextContainerStyled = styled.div`
    background-color: #d53f3f;`

const BtnMainStyled = styled.div`
    background-color: #d0d53f;
   
`