import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

class Habit extends Component {

    handleIncrease = () => {
        this.props.handleIncrease(this.props.habit);
    }
    handleDecrease = () => {
        this.props.handleDecrease(this.props.habit);
    }
    handleDelete = () => {
        this.props.handleDelete(this.props.habit);
    }

    render() {
        const { name, count } = this.props.habit;
        return (
            <li className='habit'>
                <span className='habit-name'>{name}</span>
                <span className='habit-count'>{count}</span>
                <button onClick={this.handleIncrease} className='habit-button habit-increase'>
                    <FontAwesomeIcon icon={faPlusSquare} />
                </button>
                <button onClick={this.handleDecrease} className='habit-button habit-decrease'>
                    <FontAwesomeIcon icon={faMinusSquare} />
                </button>
                <button onClick={this.handleDelete} className='habit-button habit-delete'>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </li>
        );
    }
}

export default Habit;