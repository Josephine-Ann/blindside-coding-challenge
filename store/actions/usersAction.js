import {GET_USERS, USERS_ERROR} from '../types'

export const getUsers = () => async (dispatch) => {
    const responseUsers = await fetch('http://localhost:3000/api/users')
    const responseSessions = await fetch('http://localhost:3000/api/sessions')
    const users = await responseUsers.json()
    const sessions = await responseSessions.json()
    const user = users.find(user => user.id === sessions._id)
  try{
        dispatch({
            type: GET_USERS,
            payload: user
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }

}


