import {FlexWrapper} from '../../../../components/FlexWrapper.styled.tsx';
import {ProjectCard} from "./projectCard/ProjectCard";
import photo from "../../../images/project_1.webp"
import photo1 from "../../../images/project_2.webp"
import photo2 from "../../../images/project_3.webp"
import styled from "styled-components";
import {Container} from "../../../../components/Conteiner.styled.tsx";
import {TitleSection} from "../../../../components/TitleSection.styled.tsx";
import {thema} from "../../../../styles/Thema.tsx";


export const Projects = () => {
    return (
        <ProjectsStyled>
            <Container>
                <TitleSection>Projects</TitleSection>
                <FlexWrapper direction={'column'} align={'center'} gap={'80px'} padding={'80px 0 144px 0'} as = "ul">
                    <ProjectCard id={"1"} projectName={'Project Name'} projectText={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'}
                                 photo={`${photo}`} projectLink={"#"}/>
                    <ProjectCard id={"2"} projectName={'Project Name'} projectText={'What was your role, your deliverables, if the project was personal, freelancing.'}
                                 photo={`${photo1}`} projectLink={"#"}/>
                    <ProjectCard id={"3"} projectName={'Project Name'} projectText={'You can also add in this description the type of the project, if it was for web, mobile, electron.'}
                                 photo={`${photo2}`} projectLink={"#"}/>
                </FlexWrapper>
            </Container>
        </ProjectsStyled>
    );
};

const ProjectsStyled = styled.div`
    ul > li {
        &:nth-child(odd) {
            flex-direction: row;
            @media ${thema.media.tablet} {
                flex-direction: column-reverse;
            }
        }

        &:nth-child(even) {
            flex-direction: row-reverse;
            @media ${thema.media.tablet} {
                flex-direction: column-reverse;
            }
        }
      
    }

    

            
               
           


`



