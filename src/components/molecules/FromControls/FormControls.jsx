import react, { Fragment } from 'react';
import { FormCheckbox } from '../../atoms/FormCheckbox/FormCheckbox';
import { FormDivider } from '../../atoms/FormDivider/FormDivider';
import { FormInput } from '../../atoms/FormInput/FormInput';
import { FormLabel } from '../../atoms/FormLabel/FormLabel';
import { FormFileUploader } from '../../atoms/FromFileUploader/FormFileUploader';
import { FormControlWrapper } from './Style';

export const FormControls = ({
    type,
    value,
    id,
    onLabelChange,
    isEdit = false,
    label,
    onFormValChange
}) => {
    const getFormControlBasedoType = (
        type,
        value,
        id,
        label
    ) => {
        switch (type) {
            case "input":
                return (<FormInput
                    type={type}
                    value={value}
                    id={id}
                    label={label}
                    onChange={onFormValChange} 
                />);
            case "checkbox":
                return (<FormCheckbox
                    type={type}
                    value={value}
                    onLabelChange={onLabelChange}
                    isEdit={isEdit}
                    id={id}
                    label={label}
                    onChange={onFormValChange} 
                />);
            case "divider":
                return (<FormDivider
                    type={type}
                    value={value}
                    id={id}
                    label={label}
                    onChange={onFormValChange} 
                />);
            case "label":
                return (<FormLabel
                    type={type}
                    value={value}
                    onLabelChange={onLabelChange}
                    isEdit={isEdit}
                    id={id}
                    label={label}
                    onChange={onFormValChange} 
                />);
            case "fileUploader":
                return (<FormFileUploader
                    type={type}
                    value={value}
                    id={id}
                    label={label}
                    onChange={onFormValChange} 
                />);
        }
    }
    return (
        <FormControlWrapper>
            {getFormControlBasedoType(type, value, id, label)}
        </FormControlWrapper>
    );
}

