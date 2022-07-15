import { TYPES } from "../actions/types";
import initialState from "./initialState";

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.EACH_ORDER:
      console.log("ACTION--->", action.payload.id , state)
      let cartItem = action.payload
      let existed_item = state.cartItems.find(item => action.payload.id  === item.id)
      console.log("PEEEEEEEEEEP", cartItem, existed_item)
      if (existed_item) {
        cartItem.quantity += 1
        console.log("hehehe",existed_item, cartItem)

        return {
          ...state,
          total: state.total + cartItem.price
        }
      }else if (!existed_item && cartItem){
        
        cartItem.quantity = 1 ;
        //calculating the total
        let newTotal = state.total + cartItem.price 
        console.log("newTotal", newTotal  )
        
        return{
            ...state.cartItems,
            cartItems: [...state.cartItems, cartItem],
            total : newTotal
        }
      }

      // return {
      //   ...state,
      //   order: action.payload,
      // };
    default:
      console.log("new---->", state.order)
      return state;
  }
};
export default OrderReducer;
