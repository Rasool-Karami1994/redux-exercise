import { BUY_CAKE } from "./CakeActionTypes";
const initialState = {
  numberOfCakes: 10,
};
function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - action.payload };
    default:
      return state;
  }
}
export default cakeReducer;
