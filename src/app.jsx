import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './app.css';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Auth from './service/auth.js';

const App = (props) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const auth = new Auth();
  useEffect(() => {
    loading && read('users/');
  })
  function read(url) {
    auth.db.readData(url, setUser);
    setLoading(false);
  }

  useEffect(() => {
    auth.observeAuthState();
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login user={user} />} />
        {
          user && <Route path="/user" element={<Dashboard />} />
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App;