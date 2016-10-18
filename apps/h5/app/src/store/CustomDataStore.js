import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CustomDataReducer from '../reducer/CustomDataReducer.js';

export const createCustomDataStore = (data = null) => createStore(CustomDataReducer, data, applyMiddleware(thunk));
