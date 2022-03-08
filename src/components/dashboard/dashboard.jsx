import React from 'react';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';

const Dashboard = (props) => {
    return (
        <>
            <CardMaker />
            <CardPreview />
        </>
    )
}

export default Dashboard;