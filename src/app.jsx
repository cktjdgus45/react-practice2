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
  handleIncrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  }
  handleDecrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  }
  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits })
  }
  onAdd = (value) => {
    const habits = [...this.state.habits];
    const updated = [...habits,
    {
      id: habits.length + 1,
      name: value,
      count: 0
    }]
    this.setState({ habits: updated });
  }
  render() {
    return (
      <>
        <Navbar habitsCount={this.state.habits.length} />
        <HabitInput onAdd={this.onAdd} />
        <Habits habits={this.state.habits}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleDelete={this.handleDelete} />
      </>
    );
  }
}

export default App;