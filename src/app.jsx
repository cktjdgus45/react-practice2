import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './app.css';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Auth from './service/auth.js';

const App = (props) => {
  const auth = new Auth();
  useEffect(() => {
    auth.observeAuthState();
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/user" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;