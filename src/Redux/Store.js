import { createStore } from "redux";
import rootReducers from "./Reducers";

const Store=createStore(rootReducers)

export default Store;