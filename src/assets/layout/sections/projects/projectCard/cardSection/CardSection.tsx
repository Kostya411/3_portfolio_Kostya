import {FlexWrapper} from "../../../../../../components/FlexWrapper.styled.tsx";
import {CardTitle} from "./CardTitle.styled";
import {CardText} from "./CardText.styled";
import {CardView} from "./CardButton.styled";
import styled from "styled-components";
import {thema} from "../../../../../../styles/Thema.tsx";

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
    
    max-width: 50%;
    max-height: 524px;
    padding: 40px 40px 40px 50px ;
    @media ${thema.media.tablet} {
        max-width: 100%;
        padding: 130px 35px;
    }
    
    
    
`



