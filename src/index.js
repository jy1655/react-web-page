import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './style.css';
import Foot from './Foot';
import Navigation from './navigation';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Foot />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);



<title>AidALL</title>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
