// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
// import auth from './auth'
import todo from "./../../components/todo/store/reducer/index";

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
