import react, { Fragment } from 'react';
import { Input } from './Style';

export const FormInput = ({
    type,
    props,
    value,
    onChange = () => { },
    id
}) => {
    return (
        <Input
            type="text"
            placeholder="Placeholder ...."
            value={value}
            key={id}
            onChange={e => onChange(id, e.target.value, type)} />
    );
}

