import {GET_USERS, USERS_ERROR} from '../types'
import { getSession } from "next-auth/react"

export const getUsers = () => async (dispatch) => {
    try{
        const res = await getSession()
        dispatch({
            type: GET_USERS,
            payload: res
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }

}


export const getServerSideProps = async (context) => {
    const data = await getSession(context)
  
    return {
      props: {
        data
      }
    }
  }