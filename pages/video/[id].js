import React, { useState } from 'react';
import IndividualVideoPage from '../../Components/IndividualVideoPage'
import Comments from '../../Components/Comments';
import {getVideo} from '../../store/actions/videoAction'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from "../../Components/Layout";


const videoView = () => {
    const videoList = useSelector(state => state.videoList)
    const {loading, error, video} = videoList
    const dispatch = useDispatch()
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (id !== undefined) dispatch(getVideo(id))
    }, [id])
    return (
        <Layout>
        {
                loading ? (
                    <>
                        <h1>loading...</h1>
                    </>
                ) : (
                   <IndividualVideoPage video={video}/>
                )
            }
                <Comments/>
        </Layout>
    );
};

export default videoView;