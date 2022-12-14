import addItems from "./AddItems";
import quantityHandler from "./QuantityHandler";
import saveItems from "./SaveItems";
import { combineReducers } from "redux";

const rootReducers=combineReducers({addItems,quantityHandler,saveItems})

export default rootReducers;