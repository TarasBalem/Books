import C from "../constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
  const {type, payload} = action;
  switch (type) {
    case C.SELECT_BOOK:
      return payload.id === state ? null : payload.id;
    default:
      return state;
  }
};
