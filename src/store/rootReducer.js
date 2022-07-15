import OrderReducer from "../store/reducers/eachOrder";
import allOrdersReducer from "./reducers/allOrdersReduser";
import { productReducer } from "./reducers/product";
import { combineReducers } from "redux";

export default combineReducers({
  products: productReducer,
  order:OrderReducer,
  allOrders: allOrdersReducer
  

});
