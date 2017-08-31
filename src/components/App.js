import React from 'react';
import { Routes } from '../Routes';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { store } from '../store';
import { Router } from 'react-router-dom';
import Layout from './Layout';

const history = syncHistoryWithStore(createBrowserHistory(), store);

const App = () => {
  return (
    <Layout>
      <Router history={history}>
        <Routes/>
      </Router>
    </Layout>
  )
}

export default App
