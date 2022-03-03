import React, { Component } from 'react';

class HabitInput extends Component {
    render() {
        return (
            <form type="submit" className='habit-form'>
                <input type="text" placeholder='Habit' className='habit-form-input' />
                <button className='habit-form-button'>Add</button>
            </form>
        );
    }
}

export default HabitInput;