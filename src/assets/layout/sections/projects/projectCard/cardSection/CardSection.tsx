import {FlexWrapper} from "../../../../../../components/FlexWrapper.styled.tsx";
import {CardTitle} from "./CardTitle.styled";
import {CardText} from "./CardText.styled";
import {CardWiew} from "./CardButton.styled";

type CardSectionPropsType = {
    projectName: string
    projectText: string
    projectLink: string
}

export const CardSection = (props: CardSectionPropsType) => {
    return (
        <FlexWrapper direction={"column"} gap={'24px'}>
            <CardTitle>
                {props.projectName}
            </CardTitle>
            <CardText>
                {props.projectText}
            </CardText>
            <CardWiew href={props.projectLink}>
                View Project
            </CardWiew>
        </FlexWrapper>



    );
};



