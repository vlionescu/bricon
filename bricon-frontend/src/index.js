import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './stores/store';
import './index.css';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , root);
