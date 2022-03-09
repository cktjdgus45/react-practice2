import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import './app.css';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

const App = (props) => {

  const [cards, setCards] = useState(
    [
      {
        id: 1,
        name: 'name',
        company: 'kakao',
        title: 'developer',
        email: 'cktjdgus45@naver.com',
        message: 'just do it',
        tema: 'Dark',
        profile: '/images/logo.png'
      },
      {
        id: 2,
        name: 'name2',
        company: 'kakao2',
        title: 'developer2',
        email: 'cktjdgus45@naver.com',
        message: 'just do it2',
        tema: 'Colorful',
        profile: '/images/logo.png'
      },
      {
        id: 3,
        name: 'name3',
        company: 'kakao3',
        title: 'developer3',
        email: 'cktjdgus45@naver.com',
        message: 'just do it3',
        tema: 'Light',
        profile: '/images/logo.png'
      },

    ]
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/user" element={<Dashboard cards={cards} setCards={setCards} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;