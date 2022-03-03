import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

class Habit extends Component {
    render() {
        return (
            <li className='habit'>
                <span className='habit-name'>Reading</span>
                <span className='habit-count'>8</span>
                <button className='habit-button habit-increase'>
                    <FontAwesomeIcon icon={faPlusSquare} />
                </button>
                <button className='habit-button habit-decrease'>
                    <FontAwesomeIcon icon={faMinusSquare} />
                </button>
                <button className='habit-button habit-delete'>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </li>
        );
    }
}

export default Habit;