import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import AppRestaurants from './AppRestaurants';

ReactDOM.render(
  <BrowserRouter>
    <AppRestaurants />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
