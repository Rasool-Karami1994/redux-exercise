import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "./userActionTypes";
import axios from "axios";

export function FetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}
export function FetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}
export function FetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(FetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(FetchUsersSuccess(users));
      })
      .catch((error) => dispatch(FetchUsersFailure(error.message)));
  };
};
