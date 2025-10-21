import {Title} from "./Title.styled.tsx";
import {TitleLine} from "./TitleLine.styled.tsx";
import {FlexWrapper} from "./FlexWrapper.styled.tsx";

type SectionTitlePropsType = {
    text: 'string'
}
export const SectionTitle = (props: SectionTitlePropsType) => {
    return(
        <>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                <Title>{props.text}</Title>
                <TitleLine/>
            </FlexWrapper>
        </>
    )}
