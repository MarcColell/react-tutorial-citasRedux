// Conjunto de reducers

import { combineReducers } from 'redux';
import citasReducer from './citasReducer';
import formReducer from './formReducer';

export default combineReducers({
    citas: citasReducer,
    error: formReducer
});