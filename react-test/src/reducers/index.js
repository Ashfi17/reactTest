import { combineReducers } from "redux";
import introReducer from "./introReducer";

export default combineReducers({
  introReducer: introReducer,
});
