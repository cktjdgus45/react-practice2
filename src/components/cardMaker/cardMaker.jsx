import React, { useRef } from 'react';
import CardAddForm from '../cardAddForm/cardAddForm';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './cardMaker.module.css';

const CardMaker = ({ cards, setCards }) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.sectionTitle}>Card Maker</h1>
            {
                cards.map(card => {
                    return (
                        <CardEditForm key={card.id} card={card} setCards={setCards} />
                    )
                })
            }
            <CardAddForm setCards={setCards} />
        </div>
    )
}

export default CardMaker;