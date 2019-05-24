import { combineReducers } from 'redux';
import posts from './reducers/postReducer';
import comments from './reducers/commentReducer';

export default combineReducers({
  posts,
  comments
});
