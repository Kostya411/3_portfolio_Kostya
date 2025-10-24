import styled from "styled-components";

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
    color: #25282b;
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
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    background: #fff;
`


