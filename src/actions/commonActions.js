import {GET_MAIN_DATA, GET_PRODUCTS_DATA} from './types';
import mainData from '../data/mainData.json';
import productsData from '../data/productsData.json';

export const getMainData = () => dispatch => {
  dispatch({type: GET_MAIN_DATA, payload: mainData});
};

export const getProductsData = () => dispatch => {
  dispatch({type: GET_PRODUCTS_DATA, payload: productsData.data});
};
