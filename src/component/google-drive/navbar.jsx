import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavContainer = (props) => {
    return (
        <Navbar bg='light' expand='sm'>
            <Navbar.Brand as={Link} to='/'>
                WDS Drive
            </Navbar.Brand>
            <Nav.Link as={Link} to="/user">
                Profile
            </Nav.Link>
        </Navbar>
    )
}

export default NavContainer;