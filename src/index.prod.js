import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './root_saga';
import rootReducers from './root_reducer';
import createHistory from 'history/createBrowserHistory';

//for react-router-redux
const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware,historyMiddleware)
);

let sagaTask = sagaMiddleware.run(function* () {
  yield RootSaga();
});

// and react will render the whole stuff into the div
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
