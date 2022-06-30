import { TYPES } from "../actions/types";
import initialState from "./initialState";

const allOrdersReducer = (state = initialState.allOrders, action) => {
  switch (action.type) {
    case TYPES.ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload
      };
    default:
      return state;
  }
};
export default allOrdersReducer;
