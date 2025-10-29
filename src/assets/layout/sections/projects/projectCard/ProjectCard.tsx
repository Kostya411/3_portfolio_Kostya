import {CardPhoto} from "./CardPhoto.styled";
import {CardSection} from "./cardSection/CardSection";
import styled from "styled-components";
import {thema} from "../../../../../styles/Thema.tsx";

type ProjectCardPropsType = {
    id: string,
    projectName: string,
    projectText: string,
    projectLink: string,
    position?: boolean,
    photo: string,
}


export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <ProjectCardStyled>
                <CardSection projectName={props.projectName} projectText={props.projectText} projectLink={props.projectLink}/>
                <CardPhoto src={props.photo}/>
        </ProjectCardStyled>

    );
};

const ProjectCardStyled = styled.li`
    background: ${thema.color.light.first};
    overflow: hidden;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    border-radius: 24px;
    max-width: 992px;
    @media ${thema.media.tablet} {
        max-width: 496px;
    }

    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0;
   
`


