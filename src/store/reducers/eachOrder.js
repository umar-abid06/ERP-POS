import { TYPES } from "../actions/types";
import initialState from "./initialState";

const OrderReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case TYPES.EACH_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
export default OrderReducer;
