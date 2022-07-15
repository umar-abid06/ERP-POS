import { TYPES } from "./types";

export const deleteOrderLine = (details) => {

  return (dispatch) => {
    dispatch({
      type: TYPES.DELETE_ORDER_LINE,
      payload: details,
    });
  };
};
