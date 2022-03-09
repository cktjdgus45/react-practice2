import React from 'react';
import { useLocation } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import styles from './dashboard.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Dashboard = ({ cards, setCards }) => {
    const location = useLocation();
    console.log(location.state)
    const uid = location.state.uid;
    return (
        <div className={styles.dashboard}>
            <Header uid={uid} />
            <div className={styles.container}>
                <CardMaker setCards={setCards} />
                <CardPreview cards={cards} />
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;