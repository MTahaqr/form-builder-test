import * as c from '../actionTypes';

export const saveForm = (payload) => {
    return (
        {
            type: c.SAVEFORM,
            payload,
        }
    )
}

export const saveFormSuccess = (payload) => (
    {
        type: c.SAVEFORM_SUCCESS,
        payload
    }
)

export const saveFormFailed = (payload) => (
    {
        type: c.SAVEFORM_FAILED,
        payload
    }
)

export const getForm = (payload) => {
    return (
        {
            type: c.GETFORM,
            payload,
        }
    )
}

export const getFormSuccess = (payload) => (
    {
        type: c.GETFORM_SUCCESS,
        payload
    }
)

export const getFormFailed = (payload) => (
    {
        type: c.GETFORM_FAILED,
        payload
    }
)