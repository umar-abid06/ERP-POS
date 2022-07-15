
import { TYPES } from "../actions/types";
import initialState from "./initialState";


export var deleteOrderLineReducer = (state = initialState.cartItems, action) => {
    switch (action.type) {
      case TYPES.DELETE_ORDER_LINE:

        console.log("DELETING---->",state)

        return {
            ...state,
            cartItems: action.payload,
          };
  
      default:
        console.log("STATE---->",initialState)
        return state;
    }
};