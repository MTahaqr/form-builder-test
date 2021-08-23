import react from 'react';
import { FormComponents } from '../../molecules/FormComponents/FormComponents';
import { FormButton } from '../../atoms/FormButton/FormButton';
import { AiOutlineDrag } from "react-icons/ai";
import { Main, Wrapper } from './Style';

export const FormComponentsPicker = ({
    onDragStart,
    inputTypes,
    goToValidatePage
}) => {

    return (
        <Main>
            <Wrapper>
                <FormButton 
                value={"Validate"}
                onClick={goToValidatePage}
                />
                <FormComponents
                    onDragStart={onDragStart}
                    inputTypes={inputTypes}
                    icon={AiOutlineDrag}
                />
            </Wrapper>
        </Main>
    );
}

