import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Main from './components/Main.js';
import Header from './components/Header.js';
import Movie from './components/Movie';
import Search from './components/Search';


const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(createBrowserHistory(), store);

store.subscribe(() => {
  console.log('subscribe ', store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={Header} />
        <Route  path="/search=:search" component={Main} />
        <Route  path="/movie/:id" component={Movie} />
        <Route exact path="/search=:search" component={Search} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
