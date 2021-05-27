import C from "../constants";

export const selectBookAction = (id) => ({
  type: C.SELECT_BOOK,
  payload: {id},
});
