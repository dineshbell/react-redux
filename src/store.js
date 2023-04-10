import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const Middleware = [thunk]

const store =  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...Middleware))
);
export default store; 