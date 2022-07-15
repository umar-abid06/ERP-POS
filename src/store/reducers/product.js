
import { PRODUCT } from "../actions/types";
import initialState from "./initialState";


export var productReducer = (state = initialState.productsData, action) => {
    switch (action.type) {
      case PRODUCT.GET_PRODUCTS:
        console.log("STATEONE---->",state)

        return {
            ...state,
            productsData: action.payload,
          };
  
      default:
        console.log("STATE---->",initialState)
        return state;
    }
};