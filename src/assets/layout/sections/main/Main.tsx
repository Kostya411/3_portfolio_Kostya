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
                <FlexWrapper direction={'row-reverse'} justify={'space-between'} wrap={'wrap'} align={'center'}>
                    {/*<PhotoWrapper>*/}
                    {/*    <PhotoMask>*/}
                    {/*        <PhotoStyled src={`${photo}`} alt="main photo"/>*/}
                    {/*    </PhotoMask>*/}
                    {/*</PhotoWrapper>*/}
                    <MainTextContainer/>
                </FlexWrapper>
            </Container>
        </MainStyled>
    );
};

const MainStyled = styled.section`
    overflow: visible;
    position: relative;
    z-index: -1;
    



`

const PhotoMask = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 777px;
    height: 877px;
    mask-image: url('/yellow-bg.svg');
    mask-position: left bottom;
    background-image: url('/yellow-bg.svg');
    background-position: left bottom;
`

const PhotoWrapper = styled.div`
    position: relative;
    width: 600px;
    height: 420px;
    bottom: 0;
    left: 0;
    align-items: center;
`





