import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "./userActionTypes";
const initialState = {
  loading: false,
  data: [],
  error: "",
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: "", data: action.payload };
    default:
      return state;
  }
}
export default userReducer;
