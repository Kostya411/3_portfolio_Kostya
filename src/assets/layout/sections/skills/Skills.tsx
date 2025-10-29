import {FlexWrapper} from "../../../../components/FlexWrapper.styled.tsx";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {Container} from "../../../../components/Conteiner.styled.tsx";
import {TitleSection} from "../../../../components/TitleSection.styled.tsx";
import {thema} from "../../../../styles/Thema.tsx";




export const Skills = () => {
    return (
        <SkillsStyled>
            <Container>
                <TitleSection>Skills</TitleSection>
                <FlexWrapper className={'skills-wrapper'} wrap = {'wrap'} justify={'space-around'} align={'center'} content={'space-around'} gap={'94px'} padding={'74px 0 144px 0'}>
                    <Icon iconId={'vsCode'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'JS'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'CSS'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'html'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'greenSock'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'vector-_-'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'gitHub'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'git'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'react'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'sass'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'bootstrap'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'tailwind'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                </FlexWrapper>
            </Container>
        </SkillsStyled>
    );
};

const SkillsStyled = styled.section`
    .skills-wrapper {
        @media ${thema.media.mobile} {
            padding-top: 50px;
            padding-bottom: 80px;
        }
    }
`

