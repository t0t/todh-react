import React from 'react';
import { Route } from 'react-router'
import { IndexRoute } from 'react-router'

import App from '../App'

import Home from '../components/home'
import Services from '../components/services'
import Works from '../components/work'
import Blog from '../components/blog'
import Todh from '../components/todh'
// import BlogEntry from '../components/blog'

export default (
  <Route path="/" component={App}>
    <Route path="services" component={Services} />
    <Route path="works" component={Works} />
    <Route path="blog" component={Blog} />
    <Route path="todh" component={Todh} />
    <IndexRoute component={Home} />
  </Route>
)
