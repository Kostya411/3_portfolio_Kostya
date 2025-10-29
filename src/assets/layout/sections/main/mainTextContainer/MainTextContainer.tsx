import styled from "styled-components";
import {TitleContainer} from "./TitleContainer.styled.tsx";
import {MyNameContainer} from "./MyNameContainer.styled.tsx";
import {TextContainer} from "./TextContainer.styled.tsx";
import {Button} from "../../../../../components/Button.styled.tsx";
import {FlexWrapper} from "../../../../../components/FlexWrapper.styled.tsx";
import {thema} from "../../../../../styles/Thema.tsx";


export const MainTextContainer = () => {
    return (
        <MainTextContainerStyled>
            <TitleContainer>Software Developer</TitleContainer>
            <FlexWrapper direction={'column'} align = 'flex-start' gap={'32px'} padding={'12px 0 0 0 '}>
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
    margin: 55px 0 254px 0;
    text-align: left;
    // @media ${thema.media.mainPhoto} {
    //   align-self: flex-start;
    //     max-width: 800px;
    //     margin: 50px 0 90px 0;
    // }
    
`