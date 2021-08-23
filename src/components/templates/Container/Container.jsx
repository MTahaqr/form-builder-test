import react, { Fragment } from 'react';
import { Main } from './Style'

export const Container = (props) => {
    return (
        <Main>
            {props.children}
        </Main>
    )
}