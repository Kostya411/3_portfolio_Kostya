import {FlexWrapper} from '../../../../components/FlexWrapper.styled.tsx';
import {SectionTitle} from "../../../../components/SectionTitle.styled";
import {ProjectCard} from "./projectCard/ProjectCard";
import photo from "../../../images/project_1.webp"
import photo1 from "../../../images/project_2.webp"
import photo2 from "../../../images/project_3.webp"
import styled from "styled-components";
import {Container} from "../../../../components/Conteiner.styled.tsx";


export const Projects = () => {
    return (
        <ProjectsStyled>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'} gap={'20px'}>
                    <ProjectCard id={"1"} projectName={'Name1'} projectText={'Lorem Ipsum 1'} position={false}
                                 photo={photo} projectLink={"#"}/>
                    <ProjectCard id={"2"} projectName={'Name2'} projectText={'Lorem Ipsum 2'} position={false}
                                 photo={photo1} projectLink={"#"}/>
                    <ProjectCard id={"3"} projectName={'Name3'} projectText={'Lorem Ipsum 3'} position={false}
                                 photo={photo2} projectLink={"#"}/>
                </FlexWrapper>
            </Container>
        </ProjectsStyled>
    );
};

const ProjectsStyled = styled.div`
    background-color: #988d8d;`



