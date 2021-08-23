import react, { Fragment } from 'react';
import { FormInput } from '../FormInput/FormInput';
import { LabelContainer, P } from './Style';

export const FormLabel = ({
    type,
    value,
    label,
    onChange = () => { },
    onLabelChange = () => { },
    isEdit = false,
    id
}) => {
    return (
        <Fragment>
            {!isEdit ? <LabelContainer key={id}>
                <P>{label}</P>
            </LabelContainer> :
                <FormInput
                    type={"text"}
                    onChange={onLabelChange}
                    value={label}
                    id={id}
                    key={id}
                />
            }
        </Fragment>
    );
}

