import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('.container'));

// storeが全てのデータを保持していると考える

