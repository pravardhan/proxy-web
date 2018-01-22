import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './root_saga';
import reducers from './root_reducer';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Dummy from './dummy/Dummy';

const routes = (
    <BrowserRouter history={history}>
      <Switch> 
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/dummy' component={Dummy} />
      </Switch>
    </BrowserRouter>
);

export default routes;
