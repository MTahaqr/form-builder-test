import react from 'react';
import { DividerContainer, Hr } from './Style';

export const FormDivider = ({
    type,
    id
}) => {
    return (
        <DividerContainer key={id}>
            <Hr />
        </DividerContainer>
    );
}

