import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './service/firebase.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

