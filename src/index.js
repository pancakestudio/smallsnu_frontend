import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux';
import reducers from './store/reducers';
import { Provider } from 'react-redux';
import rootSaga from './store/sagas'
import createSagaMiddleware from 'redux-saga'
import Router from './BrowserRouter'
import { Route } from 'react-router-dom'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
