import React, { useEffect, useRef } from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
    const cardRef = useRef();
    useEffect(() => {
        const { current } = cardRef;
        const tema = current.dataset.tema;
        switch (tema) {
            case 'Dark':
                current.classList.add(`${styles.dark}`);
                return;
            case 'Light':
                current.classList.add(`${styles.light}`);
                return;
            case 'Colorful':
                current.classList.add(`${styles.colorful}`);
                return;

            default:
                throw Error('Unexpected tema');
        }
    }, [card])
    return (
        <div data-tema={card.tema} className={styles.card} ref={cardRef}>
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