import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app.jsx';
import './service/firebase.js';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

