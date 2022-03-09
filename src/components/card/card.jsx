import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgBox}>
                <img className={styles.profile} src={card.profile} alt="profile" />
            </div>
            <div className={styles.info}>
                <h1>{card.name}</h1>
                <p className={styles.company}>{card.company}</p>
                <p>{card.title}</p>
                <p>{card.email}</p>
                <p>{card.message}</p>
            </div>
        </div>
    )
}
export default Card;