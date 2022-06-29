import {GET_VIDEO, VIDEO_ERROR} from '../types'

const initialState = {
    video:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_VIDEO:
        return {
            ...state,
            video:action.payload,
            loading:false
        }
        case VIDEO_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }
}