import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import authors from "./authorReducer";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  authors,
  courses,
  apiCallsInProgress
});

export default rootReducer;
