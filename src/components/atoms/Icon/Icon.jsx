import react from 'react';
import { IconContainer } from './Style';

export const Icon = ({
    type,
    onClick = () => { }
}) => {
    const Icon = type;
    return (
        <IconContainer key={type} onClick={onClick}>
            {type ? <Icon /> : ""}
        </IconContainer>

    );
}

