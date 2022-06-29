import {GET_VIDEOS, VIDEOS_ERROR} from '../types'

const initialState = {
    videos:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_VIDEOS:
        return {
            ...state,
            videos:action.payload,
            loading:false

        }
        case VIDEOS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}