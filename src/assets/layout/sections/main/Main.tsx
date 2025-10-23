import photo from '../../../images/main_photo.webp'
import {FlexWrapper} from "../../../../components/FlexWrapper.styled.tsx";
import {PhotoStyled} from "./Photo.styled";
import styled from "styled-components";
import {MainTextContainer} from "./mainTextContainer/MainTextContainer.tsx";
import {Container} from "../../../../components/Conteiner.styled.tsx";

export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} padding={'0 0 144px 0'}>
                    <MainTextContainer/>
                    <PhotoStyled src={`${photo}`} alt=""/>
                </FlexWrapper>
            </Container>
        </MainStyled>
    );
};

const MainStyled = styled.section`
`



