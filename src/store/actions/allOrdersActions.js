import { TYPES } from "./types";

export const allOrdersAction = (details) => {
  console.log("InsideAllOrderAction--->", details);
  return (dispatch) => {
    dispatch({
      type: TYPES.ALL_ORDERS,
      payload: details,
    });
  };
};
