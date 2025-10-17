import {FlexWrapper} from "../../../../components/FlexWrapper.styled.tsx";
import {Icon} from "../../../../components/icon/Icon";
import {SectionTitle} from "../../../../components/SectionTitle.styled";
import styled from "styled-components";


export const Skills = () => {
    return (
        <SkillsStyled>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper align={'space-around'} wrap={'wrap'} gap={"50px"}>
                <Icon iconId={'vsCode'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'JS'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'CSS'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'html'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'greenSock'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'vector-_-'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'gitHub'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'git'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'sass'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'bootstrap'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
                <Icon iconId={'tailwind'} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
            </FlexWrapper>
        </SkillsStyled>
    );
};

const SkillsStyled = styled.section`
    background-color: #af9d9d;
`

