import React from 'react'
import { render } from 'react-dom'
// import { store, history} from './store';
import { createStore,compose,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
import Node from './containers/Node'
import HeaderHolder from './containers/HeaderContainer';
import MainSectionHolder from './containers/MainSectionContainer';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import App from './components/App';
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middlewareList = [thunk, logger]

const enhancer = composeEnhancers(
  applyMiddleware(...middlewareList)
);

const store = createStore(reducer,enhancer)

render(
  <Provider store={store}>
  <Router>
  <div>
  <Switch>
      <Route exact path="/about" component={App} />
      <Route path="/ejndj" component={HeaderHolder} />
      <Route path = "/newTopic" component={MainSectionHolder}/>
    </Switch>
  </div>
  </Router>
  </Provider>,
  document.getElementById('root')
)

