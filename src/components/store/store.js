import React from 'react';
import rootReducer from '../reducers/rootReducer.js'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}