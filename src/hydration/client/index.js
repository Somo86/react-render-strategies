import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './pages/Router';

ReactDOM.hydrate(
  <Router />,
  document.getElementById('root')
)