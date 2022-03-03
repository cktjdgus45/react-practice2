import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    render() {
        const { habitsCount } = this.props;
        return (
            <nav className='nav'>
                <FontAwesomeIcon icon={faLeaf} className='logo' />
                <h3 className="title">Habit Tracker</h3>
                <div className="habits-count">{habitsCount}</div>
            </nav>
        );
    }
}

export default Navbar;