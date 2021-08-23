import react, { Fragment } from 'react';
import { FormControls } from '../../molecules/FromControls/FormControls';
import { AiOutlineClose, AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { Icon } from '../../atoms/Icon/Icon';
import { Main, Wrapper, H3, FormControlContainer, IconWrapper } from './Style';

export const DynamicForm = ({
    formControls,
    onRemove = () => { },
    onEdit = () => { },
    onSave = () => { },
    onLabelChange = () => { },
    isPreview = true,
    heading,
    formvalues = {},
    onFormValChange
}) => {
    return (
        <Main>
            <Wrapper>
                <H3>{heading}</H3>
                {formControls.map(({ type, id, isEditable, isEdit, label }) => {
                    return (
                        <FormControlContainer
                            key={id}>
                            <FormControls
                                type={type}
                                id={id}
                                key={id}
                                onLabelChange={onLabelChange}
                                isEdit={isEdit}
                                label={label}
                                value={formvalues[`${type}-${id}`]}
                                onFormValChange={onFormValChange}
                            />
                            {!isPreview ? <IconWrapper>
                                {!isEdit ? <Icon
                                    onClick={() => onRemove(id)}
                                    type={AiOutlineClose} /> : ""}
                                {(isEditable && !isEdit) ? <Icon
                                    onClick={() => onEdit(id)}
                                    type={AiOutlineEdit} /> : ""}
                                {isEdit ? <Icon
                                    onClick={() => onSave(id)}
                                    type={AiOutlineCheck} /> : ""}
                            </IconWrapper>
                                : ""}
                        </FormControlContainer>)
                })}
            </Wrapper>
        </Main>
    )
}