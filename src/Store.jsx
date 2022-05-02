import { createStore } from "redux";
import RootReducer from "./components/Redux/Reducer/RootReducer";

const store = createStore(RootReducer);

export default store;
