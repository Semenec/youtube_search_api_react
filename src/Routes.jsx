import Movie from './containers/Movie';
import Search from './containers/Search';
import { Route } from 'react-router-dom';
import React from 'react';


export const Routes = () => (
  <div>
      <Route path="/movie/:id" component={Movie} />
      <Route exact path="/search=:search" component={Search} />
  </div>
)
