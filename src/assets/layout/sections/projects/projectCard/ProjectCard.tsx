import {CardPhoto} from "./CardPhoto.styled";
import {CardSection} from "./cardSection/CardSection";
import {FlexWrapper} from "../../../../../components/FlexWrapper.styled.tsx";
import styled from "styled-components";

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
            <FlexWrapper direction={'row'} align={'center'}>
                <CardSection projectName={props.projectName} projectText={props.projectText} projectLink={props.projectLink}/>
                <CardPhoto src={props.photo}/>
            </FlexWrapper>
        </ProjectCardStyled>

    );
};

const ProjectCardStyled = styled.div`
background-color: brown;
    padding: 10px;
`


