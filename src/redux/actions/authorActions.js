import * as authorApi from "../../api/authorApi";
import * as types from "./actionTypes";
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return async function(dispatch) {
    dispatch(beginApiCall());
    try {
      const authors = await authorApi.getAuthors();
      dispatch(loadAuthorSuccess(authors));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
}
