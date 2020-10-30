import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistory } from 'redux-simple-router';
import createSagaMiddleware from 'redux-saga';
import {
  Router, Switch, Redirect, Route,
} from 'react-router';
import { createHashHistory } from 'history';
import App from 'app/container';
import UserComponent from 'components/Users';
import UserDetailComponent from 'components/Users/UserDetail';
import PublicRoute from 'components/PublicRoute';
import NotFound from 'components/NotFound';
import reducer from './reducers';
import rootSaga from './sagas';
import './css/main.scss';

const sagaMiddleware = createSagaMiddleware();
const history = createHashHistory();
const reduxRouterMiddleware = syncHistory(history);
const store = createStore(reducer,
  compose(
    applyMiddleware(reduxRouterMiddleware),
    applyMiddleware(sagaMiddleware),
  ));

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
      <Router history={history}>
        <App routes="" history={history}>
          <Switch>
            <Redirect exact from="/" to="/users" />
            <PublicRoute path="/users/detail/:id" component={UserDetailComponent} />
            <PublicRoute path="/users" component={UserComponent} />
            <Route component={NotFound} />
          </Switch>
        </App>
    </Router></Provider>, document.getElementById('app'),
);
