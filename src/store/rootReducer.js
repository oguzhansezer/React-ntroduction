import { combineReducers } from 'redux';
import { basketReducer } from './reducers/basketReducer';


const allReducers = {
  basketReducer
};

export const rootReducer = combineReducers(allReducers);