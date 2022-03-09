import React from 'react';
import { useLocation } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';

const Dashboard = (props) => {
    const location = useLocation();
    console.log(location.state)
    return (
        <>
            <CardMaker />
            <CardPreview />
        </>
    )
}

export default Dashboard;