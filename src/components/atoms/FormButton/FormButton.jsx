import react from 'react';
import { AiOutlineDrag } from 'react-icons/ai';
import { Button } from './Style';

export const FormButton = ({
    type,
    value,
    icon,
    onClick = () => { },
    isDisabled = false,
    props,
    id
}) => {
    const Icons = icon;
    return (
        <Button
            isDisabled={isDisabled}
            onClick={onClick}
            key={id}
        >
            {icon ? <Icons /> : ""}
            {value}
        </Button>

    );
}

