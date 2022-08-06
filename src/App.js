import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./redux/cake/CakeContainer";
import HookCakeContainer from "./redux/cake/HookCakeContainer";
import HookIceCreamContainer from "./redux/ice-cream/HookIceCreamContainer";
import DynamicCakeShopping from "./redux/cake/dynamicCakeShopping";
import UserContainer from "./redux/user/UserContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HookCakeContainer />
        <HookIceCreamContainer />
        <DynamicCakeShopping />
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;
