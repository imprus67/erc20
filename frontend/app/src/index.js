import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
    networkId: null,
    account: null,
    balanceOfToken: null,
    contract: null,
    symbol: null,
    rightNetwork: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_NETWORK_ID":
            return {...state, networkId: action.payload}
        case "SET_ACCOUNT":
            return {...state, account: action.payload}
        case "SET_BALANCE_OF_TOKEN":
            return {...state, balanceOfToken: action.payload}
        case "SET_CONTRACT":
            return {...state, contract: action.payload}
        case "SET_SYMBOL":
            return {...state, symbol: action.payload}
        case "RIGTH_NETWORK":
            return {...state, rightNetwork: action.payload}
        default: 
        return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, 
document.getElementById('root'));
