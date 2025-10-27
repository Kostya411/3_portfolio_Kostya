import {FlexWrapper} from "../../../../../../components/FlexWrapper.styled.tsx";
import {CardTitle} from "./CardTitle.styled";
import {CardText} from "./CardText.styled";
import {CardView} from "./CardButton.styled";
import styled from "styled-components";

type CardSectionPropsType = {
    projectName: string
    projectText: string
    projectLink: string
}

export const CardSection = (props: CardSectionPropsType) => {
    return (
        <CardSectionStyled>
            <FlexWrapper direction={"column"} gap={'24px'} align={'flex-start'}>
                <CardTitle>
                    {props.projectName}
                </CardTitle>
                <CardText>
                    {props.projectText}
                </CardText>
                <CardView href={props.projectLink}>
                    View Project
                </CardView>
            </FlexWrapper>
        </CardSectionStyled>
    );
};

const CardSectionStyled = styled.div`
    
    max-width: 496px;
    max-height: 524px;
    padding: 40px 40px 40px 50px ;
    
    
    
`



