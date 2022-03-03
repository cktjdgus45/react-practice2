import React, { Component } from 'react';

class HabitInput extends Component {
    state = {
        value: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const value = this.state.value;
        this.props.onAdd(value);
        console.log(value)
        this.setState({ value: '' });
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    render() {
        return (
            <form type="submit" className='habit-form' onSubmit={this.handleSubmit}>
                <input value={this.state.value} onChange={this.handleChange} type="text" placeholder='Habit' className='habit-form-input' />
                <button className='habit-form-button'>Add</button>
            </form>
        );
    }
}

export default HabitInput;