import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/Index.css';

import { browserHistory, Router, Route, Link } from 'react-router'
import { hashHistory } from 'react-router'
import routes from './config/routes';


ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
);
