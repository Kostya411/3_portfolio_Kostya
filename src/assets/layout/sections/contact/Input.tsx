import styled from "styled-components";
import {thema} from "../../../../styles/Thema.tsx";

type InputPropsType = {
    name?: string,
    id?: string,
    type?: string,

    height?: string,

}

export const InputSet = (props: InputPropsType) => {
    return (
        <Label htmlFor={props.id} >
            <span>{props.name}</span>
            <Input type={props.type} id={props.id} height={props.height}/>
        </Label>
    )
}

const Label = styled.label<InputPropsType>`
    font-weight: 600;
    font-size: 16px;
    color: ${thema.color.grey.second};
    width: 100%;
    text-align: left;
    span {
    margin-left: 1px;    
    }

`
const Input = styled.input<InputPropsType>`
    width: 100%;
    height: ${(props)=> props.height || `10px`};
    margin-top: 8px;
    border: 1px solid ${thema.color.light.second};
    border-radius: 8px;
    background: ${thema.color.light.first};
`


