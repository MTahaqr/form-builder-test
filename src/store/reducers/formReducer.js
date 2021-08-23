
import * as c from '../actionTypes';
import { GetFormListFakeAPI, SaveFormFakeAPI } from '../../utils/utils';
const initialState = {
    loading: false,
    formList: []
}


const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.GETFORM:
            // It's a fake api call that's why I'am call it directly in redcuer, otherwise proper solution is to use any middleware like redux-saga for any async actions 
            return { ...state, loading: true, formList: GetFormListFakeAPI() }
        case c.GETFORM_SUCCESS:
            return { ...state, loading: false, loginError: "", user: action.payload }
        case c.GETFORM_FAILED:
            return { ...state, loading: false, loginError: action.payload }
        case c.SAVEFORM:
            // It's a fake api call that's why I'am call it directly in redcuer, otherwise proper solution is to use any middleware like redux-saga for any async actions 
            SaveFormFakeAPI(action.payload)
            return { ...state, loading: true }
        case c.SAVEFORM_SUCCESS:
            return { ...state, loading: false, loginError: "", user: action.payload }
        case c.SAVEFORM_FAILED:
            return { ...state, loading: false, loginError: action.payload }
        default: {
            return state
        }
    }

}
export default formReducer;
