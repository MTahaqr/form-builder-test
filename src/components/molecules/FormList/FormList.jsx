import react from 'react';
import { Main, Ul, List, H3 } from './Style';

export const FormList = ({
    formList,
    onClick
}) => {
    return (
        <Main>
            <H3>Forms</H3>
            <ul>
                {formList.map(({ id, name }) => {
                    return (
                        <List key={id} onClick={() => onClick(id)}>{name}</List>
                    )
                })}
            </ul>
        </Main>
    )
}