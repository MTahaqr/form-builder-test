import { combineReducers } from 'redux';
import FormReducer from './formReducer';

export const allReducers = combineReducers({
    Form: FormReducer
})