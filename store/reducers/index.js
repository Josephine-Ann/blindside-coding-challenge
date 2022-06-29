import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import videosReducer from './videosReducer';
import videoReducer from './videoReducer';
import inputReducer from './inputReducer';

export default combineReducers({
  usersList: usersReducer,
  videosList: videosReducer,
  videoList: videoReducer,
  inputField: inputReducer
})