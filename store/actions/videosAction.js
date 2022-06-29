import {GET_VIDEOS, VIDEOS_ERROR} from '../types'

export const getVideos = (query) => async dispatch => {
    try{
        const cachedEntry = window.localStorage.getItem(`https://api.pexels.com/videos/search?query=${query}&per_page=6`)
        if (!cachedEntry) {
            fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=6`,{
                headers: {
                    Authorization: '563492ad6f9170000100000103034ce8f57b402ebb3c8f87cf20e770',
                }
            })
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            window.localStorage.setItem(`https://api.pexels.com/videos/search?query=${query}&per_page=6`, JSON.stringify(data.videos));
            dispatch({
                type: GET_VIDEOS,
                payload: data.videos
            })
        })
        } else {
            dispatch({
                type: GET_VIDEOS,
                payload: JSON.parse(cachedEntry)
            })
        }
       
    } catch(error) {
        dispatch( {
            type: VIDEOS_ERROR,
            payload: error,
        })
    }

}