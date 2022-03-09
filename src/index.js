import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { app } from './service/firebase.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

