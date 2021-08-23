import react, { Fragment } from 'react';
import { Main } from './Style';

export const Sidebar = (props) => {
    return (
        <Main>
            {props.children}
        </Main>
    )
}