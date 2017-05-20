import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App';
import Dashboard from './components/Dashboard';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>,
  document.getElementById('root')
);
