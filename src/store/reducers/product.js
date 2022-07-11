
import { PRODUCT } from "../actions/types";
import initialState from "./initialState";


export var productReducer = (state = initialState.products, action) => {
    console.log("type--->",action, PRODUCT.GET_PRODUCTS)
    switch (action.type) {
      case PRODUCT.GET_PRODUCTS:
        return {
            ...state,
            productsData: action.payload,
          };
  
      default:
        return state;
    }
};