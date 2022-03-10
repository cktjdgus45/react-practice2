import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import styles from './dashboard.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import DB from '../../service/database';

const Dashboard = () => {
    const location = useLocation();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const uid = location.state.uid;
    const db = new DB();

    function write(id, name, company, title, email, message, tema, profile) {
        db.writeCardData(id, name, company, title, email, message, tema, profile);
    }

    function read(url) {
        db.readData(url, setCards);
        setLoading(false);
    }

    function remove(url, id) {
        db.removeData(url, id);
    }

    loading && read('cards/');
    return (
        <div className={styles.dashboard}>
            <Header uid={uid} />
            <div className={styles.container}>
                <CardMaker write={write} cards={cards} setCards={setCards} remove={remove} />
                <CardPreview cards={cards} />
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;