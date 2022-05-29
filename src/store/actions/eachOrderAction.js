import { TYPES } from "./types";

export const setOrder = (details) => {
  console.log("InsideAction--->", details);
  return (dispatch) => {
    dispatch({
      type: TYPES.EACH_ORDER,
      payload: details,
    });
  };
};
