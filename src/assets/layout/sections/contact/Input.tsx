type InputPropsType = {
    name: 'string'
    type: 'string'
    id: 'string'
}

export const Input = (props: InputPropsType) => {
    return (
        <label for={props.id}>
            {props.name}
            <input type={props.type} id={props.id}/>
        </label>
    )
}
