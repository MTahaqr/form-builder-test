import react, { Fragment } from 'react';
import { FormFileContainer, Button, Input } from './Style';

export const FormFileUploader = ({ 
    type,
    props,
    value,
    onChange,
    id
 }) => {
    return (
        <FormFileContainer key={id}>
            <Button >Choose file</Button>
            <Input type="file" name="myfile" />
        </FormFileContainer>
    );
}

