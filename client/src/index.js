import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import App from './components/app';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
let f1 = applyMiddleware(promise);
const createStoreWithMiddleware = f1(createStore);
let store = createStoreWithMiddleware(reducers)

ReactDOM.render (
   <Provider store={store}>
      <Router history = {browserHistory} routes={routes} />
   </Provider>
  , document.querySelector('.container'));
