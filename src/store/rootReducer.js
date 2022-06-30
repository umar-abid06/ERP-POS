import OrderReducer from "../store/reducers/eachOrder";
import allOrdersReducer from "./reducers/allOrdersReduser";
import { combineReducers } from "redux";

export default combineReducers({
  order:OrderReducer,
  allOrders: allOrdersReducer
  
});
