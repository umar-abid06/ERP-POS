import { TYPES } from "./types";

export const allOrdersAction = (details) => {

  return (dispatch) => {
    dispatch({
      type: TYPES.ALL_ORDERS,
      payload: details,
    });
  };
};
