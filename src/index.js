import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './root_saga';
import rootReducers from './root_reducer';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';


if (module.hot) module.hot.accept();

//for react-router-redux
const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware, logger,historyMiddleware)
);

let sagaTask = sagaMiddleware.run(function* () {
  yield RootSaga();
});

// and react will render the whole stuff into the div with hot module stuff
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {

  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./root_reducer', () => {
    store.replaceReducer(require('./root_reducer').default);
  });

  // Enable Webpack hot module replacement for sagas
  module.hot.accept('./root_saga', () => {
    const getNewSagas = require('./root_saga').default;
    sagaTask.cancel();
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(function* () {
        yield getNewSagas();
      });
    });
  });

  // Enable Webpack hot module replacement for the app
  module.hot.accept('./App', () => {

    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NextApp />
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );

  });
}
