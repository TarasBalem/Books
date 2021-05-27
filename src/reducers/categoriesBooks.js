/* eslint-disable import/no-anonymous-default-export */
import {categories} from "../books-db";
import {arrToMap} from "../utils";
import C from "../constants";

const initialState = {
  categories: arrToMap(categories),
  selectedCategory: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case C.SELECT_CATEGORY:
      return {...state, selectedCategory: payload.id};
    default:
      return state;
  }
};
