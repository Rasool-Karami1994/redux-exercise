import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./CakeActions";
const DynamicCakeShopping = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const changeHandler = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div>
      <h2>Delious Cake-{numberOfCakes}</h2>
      <input type="text" onChange={changeHandler}></input>
      <button onClick={() => dispatch(buyCake(number))}>
        buy {number} cakes
      </button>
    </div>
  );
};
export default DynamicCakeShopping;
