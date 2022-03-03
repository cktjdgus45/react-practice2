import React, { Component } from 'react';
import Habits from './components/habits';
import './app.css';
import Navbar from './components/navbar';
import HabitInput from './components/habitInput';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <HabitInput />
        <Habits />
      </>
    );
  }
}

export default App;