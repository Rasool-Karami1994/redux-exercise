import { connect } from "react-redux";
import { buyCake } from "./CakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Delious Cake-{props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>buy one cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
