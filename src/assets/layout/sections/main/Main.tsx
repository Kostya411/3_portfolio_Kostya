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
                <FlexWrapper direction={'row-reverse'} justify={'flex-end'}>
                    <PhotoWrapper>
                        <PhotoStyled src={`${photo}`} alt="main photo"/>
                    </PhotoWrapper>
                    <MainTextContainer/>
                </FlexWrapper>

            </Container>
        </MainStyled>
    );
};

const MainStyled = styled.section`
    overflow: visible;
    z-index: 9;

`

const PhotoWrapper = styled.div`
    position: relative;
    width: 375px;
    height: 200px;


`





