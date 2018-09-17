import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import { Provider } from 'react-redux';
import { Store } from './components/store/store.js'
import App from './components/App.js';
import configureStore from './components/store/store.js'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'));
