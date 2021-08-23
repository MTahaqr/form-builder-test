import react, { Fragment } from 'react';
import { FormInput } from '../FormInput/FormInput';
import { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon, Label } from './Style';

export const FormCheckbox = ({
    type,
    props,
    value,
    id,
    label,
    onChange = () => { },
    onLabelChange = () => { },
    isEdit = false,
}) => {
    return (
        <Fragment>
            {!isEdit ? <CheckboxContainer >
                <Label>
                    <HiddenCheckbox checked={value} {...props} />
                    <StyledCheckbox checked={value} onClick={() => onChange(id, !value, type)} >
                        {value ? <Icon viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                        </Icon> : ""}
                    </StyledCheckbox>
                    {label}
                </Label>
            </CheckboxContainer> :
                <FormInput
                    type={"text"}
                    onChange={onLabelChange}
                    value={label}
                    id={id}
                />
            }
        </Fragment>
    );
}

