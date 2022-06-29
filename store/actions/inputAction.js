import {SET_INPUT, GET_INPUT, INPUT_ERROR} from '../types'

export const setInput = (input) => async (dispatch) => {
    try{
        dispatch({
            type: SET_INPUT,
            payload: input
        })
         window.localStorage.setItem('input', input)
    }
    catch(error) {
        dispatch({
            type: INPUT_ERROR,
            payload: error,
        })
    }

}

export const getInput = () => async (dispatch) => {
    try{
        const cachedEntry = window.localStorage.getItem('input')
        if (cachedEntry) {
            dispatch({
                type: GET_INPUT,
                payload: cachedEntry
            })
        }
    } catch(error) {
        dispatch({
            type: INPUT_ERROR,
            payload: error,
        })
    }

}

