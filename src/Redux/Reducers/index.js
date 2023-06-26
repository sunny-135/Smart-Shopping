import { combineReducers } from "redux";
import { productsReducer } from "./prodReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
});
export default reducers;