import photo from '../../../images/main_photo.webp'
import {FlexWrapper} from "../../../../components/FlexWrapper.styled.tsx";
import {PhotoStyled} from "./Photo.styled";
import styled from "styled-components";
import {MainTextContainer} from "./mainTextContainer/MainTextContainer.tsx";

export const Main = () => {
    return (
        <MainStyled>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <MainTextContainer/>
                <PhotoStyled src={photo} alt=""/>
            </FlexWrapper>
        </MainStyled>
    );
};

const MainStyled = styled.section`
    background-color: #F5F5F5;
`



