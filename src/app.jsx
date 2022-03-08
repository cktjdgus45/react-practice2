import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import './app.css';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import { app } from './service/firebase.js';

const App = (props) => {
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