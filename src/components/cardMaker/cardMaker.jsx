import React, { } from 'react';
import CardAddForm from '../cardAddForm/cardAddForm';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './cardMaker.module.css';

const CardMaker = ({ cards, setCards, write, remove }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.sectionTitle}>Card Maker</h1>
            {
                cards.map(card => {
                    return (
                        <CardEditForm card={card} key={card.id} setCards={setCards} write={write} remove={remove} />
                    )
                })
            }
            <CardAddForm write={write} setCards={setCards} />
        </div>
    )
}

export default CardMaker;