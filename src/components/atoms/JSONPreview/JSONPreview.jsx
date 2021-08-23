import react, { Fragment } from 'react';
import { Main } from './Style';

export const JSONPreview = ({
    data
}) => {
    if (data)
        data = JSON.stringify(data)
    return (
        <Main>
            {data}
        </Main>
    );
}

