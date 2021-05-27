/* eslint-disable import/no-anonymous-default-export */
import {categories} from "../books-db";
import {arrToMap} from "../utils";

const defaultState = arrToMap(categories);

export default (state = defaultState, action) => {
  return state;
};
