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
}) => {
    const Icons = icon;
    return (
        <Button
            isDisabled={isDisabled}
            onClick={onClick}
        >
            {icon ? <Icons /> : ""}
            {value}
        </Button>

    );
}

