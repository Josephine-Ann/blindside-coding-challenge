import { getSession, signOut } from "next-auth/react"
import Image from "next/image"
import { Col, Divider, Row } from 'antd';
import 'antd/dist/antd.css';
import VideoGrid from "../Components/VideoGrid";
import IndividualVideoPage from "../Components/IndividualVideoPage";
import Layout from "../Components/Layout";
import { useEffect, useState } from 'react';
import {getVideos} from '../store/actions/videosAction'
import {useDispatch, useSelector} from 'react-redux'
import styles from '../styles/index.module.css';
import  AvatarSection  from '../Components/AvatarSection';

const style = {
  background: '#0092ff',
  padding: '8px 0',
};
export default function Home(data) {
  const dispatch = useDispatch()
  const videosList = useSelector(state => state.videosList)
  const inputField = useSelector(state => state.inputField)
  const {loading, error, videos} = videosList
  const {inputLoading, errorLoading, input} = inputField
  const [query, setQuery] = useState("nature")
  useEffect(() => {
    (async() => {
      if (input.length !== 0) {
        setQuery(input)
        dispatch(getVideos(input))
      } else {
        dispatch(getVideos(query))
      }
    })()
  }, [dispatch, input])

    return (
      <Layout>
         <AvatarSection />
         <div className="content-center w-[100vw] xl:flex xl:flex-col xl:items-center">
         <Divider className="xl:w-[100vw] w-[90vw] whitespace-normal" orientation="left">Would you like to see more videos about {query}?</Divider>
         <div className="w-[60vw] flex flex-col md:flex-row items-center md:flex-wrap">
          {
            videos !== undefined ? (
              videos.map((video) => {
                return (
                    <VideoGrid video={video}/>
                )
              })
            ) : (
              <h1>Loading</h1>
            )
          }
            </div>
          </div>      
      </Layout>
    )
}

export const getServerSideProps = async (context) => {
  const data = await getSession(context)

  if (!data) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      data
    }
  }
}