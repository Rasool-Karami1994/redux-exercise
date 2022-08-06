import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyIceCream } from "./IceCreamAction";
const HookIceCreamReducer = () => {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Delious Ice cream-{numberOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy one Ice cream</button>
    </div>
  );
};
export default HookIceCreamReducer;
