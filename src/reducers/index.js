import {combineReducers} from 'redux';

import commonReducer from './commonReducer';

export const rootReducer = combineReducers({
  common: commonReducer,
});
