import React, { Component } from 'react';
import Habits from './components/habits';
import './app.css';
import Navbar from './components/navbar';
import HabitInput from './components/habitInput';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Codinng', count: 0 },
    ]
  }
  render() {
    return (
      <>
        <Navbar habitsCount={this.state.habits.length} />
        <HabitInput />
        <Habits />
      </>
    );
  }
}

export default App;