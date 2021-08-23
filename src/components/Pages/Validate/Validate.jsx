import react, { Fragment } from 'react';
import { FormList } from '../../molecules/FormList/FormList';
import { Container } from '../../templates/Container/Container';
import { Sidebar } from '../../templates/Sidebar/Sidebar';
import { useHistory } from "react-router-dom";
import { FormButton } from '../../atoms/FormButton/FormButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { DynamicForm } from '../../organism/DynamicForm/DynamicForm';
import { JSONPreview } from '../../atoms/JSONPreview/JSONPreview';
import { useDispatch, useSelector } from 'react-redux';
import { getForm } from '../../../store/actions';
import { Main, Wrapper, DynamicFormWrapper, BtnWrapper, SubmitBtnWrapper, PreviewWrapper, DynamicFormAndPreviewWrapper } from './Style';

export const Validate = ({

}) => {
    const history = useHistory();
    const [selectedFormControls, setselectedFormControls] = useState([]);
    const [formvalues, setFormValues] = useState({});
    const dispatch = useDispatch();
    const formListState = useSelector(state => state.Form.formList);
    const [formList, setFormList] = useState([...formListState]);

    const goToCreatePage = () => {
        history.push("/create");
    }

    const getFormList = () => {
        dispatch(getForm());
    }

    const getFormById = (id) => {
        const selectedFormControls = formList.find(data => data.id === id)
        if (selectedFormControls) {
            let formvalues = {};
            for (let sfc of selectedFormControls.control) {
                formvalues = { ...formvalues, [`${sfc.type}-${sfc.id}`]: sfc.value }
            }
            setselectedFormControls(selectedFormControls)
            setFormValues({ ...formvalues })
        }
    }

    const onFormValChange = (id, val, type) => {
        setFormValues({ ...formvalues, [`${type}-${id}`]: val })
    }

    const validate = () => {
        for (let fv of Object.keys(formvalues)) {
            if (fv.includes('input')) {
                if (!formvalues[fv]) {
                    return true
                }
            }
        }
        return false
    }

    useEffect(() => {
        getFormList();
    }, [])

    useEffect(() => {
        setFormList(formListState)
    }, [formListState])


    return (
        <Main>
            <Sidebar>
                <Wrapper>
                    <BtnWrapper>
                        <FormButton
                            value={"Create"}
                            onClick={goToCreatePage}
                        />
                        <FormList
                            goToCreatePage={goToCreatePage}
                            formList={formList}
                            onClick={getFormById}
                        />
                    </BtnWrapper>
                </Wrapper>
            </Sidebar>
            <Container>
                <DynamicFormAndPreviewWrapper>
                    <DynamicFormWrapper>
                        <DynamicForm
                            formControls={selectedFormControls?.id ? selectedFormControls.control : []}
                            formvalues={formvalues}
                            heading={"Preview"}
                            onFormValChange={onFormValChange}
                        />
                        {selectedFormControls?.control?.length ? <SubmitBtnWrapper>
                            <FormButton
                                value={"Validate & Submit"}
                                isDisabled={validate()}
                            />
                        </SubmitBtnWrapper>
                            : ""}
                    </DynamicFormWrapper>
                    <PreviewWrapper>
                        <JSONPreview
                            data={formvalues}
                        />
                    </PreviewWrapper>
                </DynamicFormAndPreviewWrapper>
            </Container>
        </Main>
    );
}

