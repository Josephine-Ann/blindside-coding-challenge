import { createClient } from 'pexels';
import {GET_VIDEO, VIDEO_ERROR} from '../types'

export const getVideo = (id) => async dispatch => {
    try{
        const client = createClient('563492ad6f9170000100000103034ce8f57b402ebb3c8f87cf20e770');
        const url = `https://api.pexels.com/videos/videos/${id}`
        const cachedEntry = window.localStorage.getItem(url)
        if (cachedEntry) {
            dispatch({
                type: GET_VIDEO,
                payload: JSON.parse(cachedEntry)
            })
          } else {
            fetch(`https://api.pexels.com/videos/videos/${id}`,{
                    headers: {
                        Authorization: "563492ad6f9170000100000103034ce8f57b402ebb3c8f87cf20e770"
                    }
                })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    dispatch({
                        type: GET_VIDEO,
                        payload: data
                    })
                    window.localStorage.setItem(url, JSON.stringify(data))
                })
          }
        
    } catch(error) {
        dispatch( {
            type: VIDEO_ERROR,
            payload: error,
        })
    }

}