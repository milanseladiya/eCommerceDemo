import {GET_MAIN_DATA, GET_PRODUCTS_DATA} from '../actions/types';

const INITIAL_STATE = {
  offer: {},
  categories: [],
  products: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MAIN_DATA:
      return {
        ...state,
        offer: action?.payload?.offer || {},
        categories: action?.payload?.categories || [],
      };
    case GET_PRODUCTS_DATA:
      return {
        ...state,
        products: action?.payload || [],
      };
    default:
      return state;
  }
};
