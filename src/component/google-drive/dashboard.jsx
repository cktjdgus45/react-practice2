import React from 'react';
import NavContainer from './navbar';
import { Container } from 'react-bootstrap';
import AddFolderButton from './addFolderButton';

const Dashboard = (props) => {
    return (
        <>
            <NavContainer />
            <Container fluid>
                <AddFolderButton />
            </Container>
        </>
    )
}

export default Dashboard;