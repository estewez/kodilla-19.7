import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import reducer from './reducer.js';
import DevTools from './DevTools';

let store = createStore(
    reducer,
    DevTools.instrument()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();