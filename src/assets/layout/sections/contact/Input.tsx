import styled from "styled-components";

type InputPropsType = {
    name: string,
    type: string,
    id: string,
    width: string,
    height: string,

}

export const InputSet = (props: InputPropsType) => {
    return (
        <>
            <Label for={props.id} width={props.width}> </Label>
            <Input type={props.type} id={props.id}/>
        </>
    )
    }

    const Label = styled.label<InputPropsType>`
        width: ${props => props.width};
        height: ${props => props.height};

    `


