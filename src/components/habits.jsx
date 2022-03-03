import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrease = (habit) => {
        this.props.handleIncrease(habit);
    }
    handleDecrease = (habit) => {
        this.props.handleDecrease(habit);
    }
    handleDelete = (habit) => {
        this.props.handleDelete(habit);
    }
    render() {
        const { habits } = this.props;
        return (
            <ul>
                {
                    habits.map(habit => {
                        return (
                            <Habit
                                key={habit.id}
                                habit={habit}
                                handleIncrease={this.handleIncrease}
                                handleDecrease={this.handleDecrease}
                                handleDelete={this.handleDelete}
                            />
                        )
                    })
                }
            </ul>
        );
    }
}

export default Habits;