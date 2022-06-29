import {SET_INPUT, GET_INPUT, INPUT_ERROR} from '../types'

const initialState = {
    input:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_INPUT:
        return {
            ...state,
            loading:false

        }
        case SET_INPUT:
        return {
            ...state,
            input:action.payload,
            loading:false

        }
        case INPUT_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}