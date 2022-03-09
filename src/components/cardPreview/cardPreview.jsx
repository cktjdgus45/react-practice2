import React from 'react';
import Card from '../card/card';
import styles from './cardPreview.module.css';

const CardPreview = ({ cards }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Card Preview</h1>
            <div className={styles.cards}>
                {
                    cards.map(card => {
                        return (
                            <Card key={card.id} card={card} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardPreview;