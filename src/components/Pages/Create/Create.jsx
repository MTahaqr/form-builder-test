import react, { Fragment, useState } from 'react';
import { FormButton } from '../../atoms/FormButton/FormButton';
import { DynamicForm } from '../../organism/DynamicForm/DynamicForm';
import { FormComponentsPicker } from '../../organism/FormComponentsPicker/FormComponentsPicker';
import { Container } from '../../templates/Container/Container';
import { Sidebar } from '../../templates/Sidebar/Sidebar';
import { useHistory } from "react-router-dom";
import { AiOutlineDownload } from 'react-icons/ai'
import { saveForm } from '../../../store/actions';
import {  useDispatch } from 'react-redux';
import { Main, Wrapper, BtnWrapper } from './Style';

const inputTypes = [
    {
        id: 0,
        type: 'input',
        value: "Input"
    },
    {
        id: 1,
        type: 'checkbox',
        value: "Checkbox"
    }, {
        id: 2,
        type: 'label',
        value: "Label"
    }, {
        id: 3,
        type: 'fileUploader',
        value: "File Uploader"
    }, {
        id: 4,
        type: 'divider',
        value: "Divider"
    },
];

export const Create = ({ }) => {

    const [formControls, setFormControls] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();

    const onDragStart = (event, type) => {
        event.dataTransfer.setData("id", type)
    }
    const onDragOver = (event) => {
        event.preventDefault()
    }
    const onDrop = (event) => {
        if (event.dataTransfer.getData("id"))
            createAndAddFormtype(event.dataTransfer.getData("id"))
    }

    const createAndAddFormtype = (type) => {
        let controlData = {};
        if (type === 'checkbox' || type === 'label')
            controlData = {
                type: type,
                value: '',
                id: formControls.length + 1,
                isEditable: true,
                isEdit: false,
                label: `default ${type} value`
            }
        else
            controlData = {
                type: type,
                value: '',
                id: formControls.length + 1,
                isEditable: false,
                isEdit: false,
                label: type
            }
        setFormControls([
            ...formControls,
            {
                ...controlData
            }
        ])
    }

    const onRemove = (id) => {
        const formControlsData = formControls.filter(data => data.id !== id)
        setFormControls([
            ...formControlsData
        ])
    }

    const onEdit = (id) => {
        const formControlsData = formControls.map(data => data.id === id ? { ...data, isEdit: true } : { ...data });
        setFormControls([
            ...formControlsData
        ])
    }

    const onSave = (id) => {
        const formControlsData = formControls.map(data => data.id === id ? { ...data, isEdit: false } : { ...data });
        setFormControls([
            ...formControlsData
        ])
    }

    const onLabelChange = (id, value) => {
        console.log(value)
        const formControlsData = formControls.map(data => data.id === id ? { ...data, label: value } : { ...data });
        setFormControls([
            ...formControlsData
        ])
    }

    const goToValidatePage = () => {
        history.push("/validate");
    }


    const onSaveForm = () => {
        dispatch(saveForm([...formControls]))
        history.push("/validate");
    }

    return (
        <Main>
            <Sidebar>
                <FormComponentsPicker
                    onDragStart={onDragStart}
                    inputTypes={inputTypes}
                    goToValidatePage={goToValidatePage}
                />
            </Sidebar>
            <Container >
                <Wrapper
                    onDragOver={onDragOver}
                    onDrop={onDrop}>
                    <DynamicForm
                        formControls={formControls}
                        onRemove={onRemove}
                        onEdit={onEdit}
                        onSave={onSave}
                        onLabelChange={onLabelChange}
                        heading={"Drop and Create"}
                        isPreview={false}
                    />
                    {formControls.length ? <BtnWrapper>
                        <FormButton
                            value={"Save"}
                            onClick={onSaveForm}
                            icon={AiOutlineDownload}
                        />
                    </BtnWrapper>
                        : ""}
                </Wrapper>
            </Container>
        </Main>
    )
}