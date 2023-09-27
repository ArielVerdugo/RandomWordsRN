import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {numberWordsReducer} from './Reducers';

const rootReducer = combineReducers({numberWordsReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
