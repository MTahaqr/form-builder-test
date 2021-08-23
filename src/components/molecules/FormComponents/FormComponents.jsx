import react, { Fragment } from 'react';
import { FormButton } from '../../atoms/FormButton/FormButton';
import { Main,Wrapper,H3 } from './Style';

export const FormComponents = ({
    onDragStart,
    inputTypes,
    icon
}) => {
    return (
        <Main>
            <H3>Form Components</H3>
            {inputTypes.map(({ type, id, value }) => {
                return (<Wrapper
                    draggable
                    onDragStart={e => onDragStart(e, type)}
                    key={id}>
                    <FormButton
                        type={type}
                        value={value}
                        icon={icon} />
                </Wrapper>)
            })}
        </Main>
    )
}