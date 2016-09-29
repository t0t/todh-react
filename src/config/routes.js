import React from 'react';
import { Route } from 'react-router'
import { IndexRoute } from 'react-router'

import App from '../App'

import Home from '../components/home/Home'
import Services from '../components/services/Services'
import Works from '../components/work/Works'
import Blog from '../components/blog/Blog'
import Todh from '../components/todh/Todh'

export default (
  <Route path="/" component={App}>
    <Route path="services" component={Services} />
    <Route path="works" component={Works} />
    <Route path="blog" component={Blog} />
    <Route path="todh" component={Todh} />
    <IndexRoute component={Home} />
  </Route>
)
