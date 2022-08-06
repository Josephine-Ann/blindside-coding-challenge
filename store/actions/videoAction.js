import { createClient } from 'pexels';
import {GET_VIDEO, VIDEO_ERROR} from '../types'

export const getVideo = (id) => async dispatch => {

    try{
        const url = `https://api.pexels.com/videos/videos/${id}`
        const dbEntry = await fetch('http://localhost:3000/api/videos', {
            method: 'GET_ONE',
            body:  id
        })
        if (dbEntry) {
            dispatch({
                type: GET_VIDEO,
                payload: JSON.parse(dbEntry)
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
                    let video = {
                        [id] : data
                    };
                    fetch('http://localhost:3000/api/videos', {
                        method: 'POST',
                        body:  JSON.stringify(video)
                    })
                    // window.localStorage.setItem(url, JSON.stringify(data))
                })
          }

 
        
    } catch(error) {
        dispatch( {
            type: VIDEO_ERROR,
            payload: error,
        })
    }

}

// ____________________________________


const handleVideoSearch = async () => {
    // post structure
    let post = {
        title,
        content,
        published: false,
        createdAt: new Date().toISOString(),
    };
    // save the post
    let response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
        // reset the fields
        setTitle('');
        setContent('');
        // set the message
        return setMessage(data.message);
    } else {
        // set the error
        return setError(data.message);
    }
};
