import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./CakeActions";
const HookCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Delious Cake-{numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy one cake</button>
    </div>
  );
};
export default HookCakeContainer;
