import React from 'react';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card, setCards }) => {
    function handleChange(e) {
        setCards(prev => {
            const property = e.target.name;
            const value = e.target.value;
            const cards = [...prev];
            const index = cards.indexOf(card);
            const targetCard = cards[index];
            targetCard[property] = value;
            return [...cards];
        })
    }
    return (
        <form action="" className={styles.form}>
            <input name='name' onChange={handleChange} value={card.name} type="text" className={styles.name} placeholder='Name' />
            <input name='company' onChange={handleChange} value={card.company} type="text" className={styles.company} placeholder='Company' />
            <select name='tema' onChange={handleChange} value={card.tema} className={styles.tema}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input name='title' onChange={handleChange} value={card.title} type="text" className={styles.title} placeholder='Title' />
            <input name='email' onChange={handleChange} value={card.email} type="text" className={styles.email} placeholder='Email' />
            <input name='message' onChange={handleChange} value={card.message} type="textarea" className={styles.textarea} placeholder='Message' />
            <input name='profile' type="file" className={`${styles.button} ${styles.file}`}></input>
            <button className={`${styles.button} ${styles.add}`}>Delete</button>
        </form>
    )
}

export default CardEditForm;