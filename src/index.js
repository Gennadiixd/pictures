import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/combineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import './assets/index.scss';
import './index.css';


import Routes from './routes';

const composeEnhancers = composeWithDevTools({})
const store = createStore(reducer, composeEnhancers(applyMiddleware(createSagaMiddleware())));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('root'));