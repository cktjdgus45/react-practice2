import React from 'react';
import styles from './cardMaker.module.css';

const CardMaker = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.sectionTitle}>Card Maker</h1>
            <form action="" className={styles.form}>
                <input type="text" className={styles.name} placeholder='Name' />
                <input type="text" className={styles.company} placeholder='Company' />
                <select className={styles.tema}>
                    <option value="Light">Light</option>
                    <option value="Dark">Dark</option>
                    <option value="Colorful">Colorful</option>
                </select>
                <input type="text" className={styles.title} placeholder='Title' />
                <input type="text" className={styles.email} placeholder='Email' />
                <input type="textarea" className={styles.textarea} placeholder='Message' />
                <button className={`${styles.button} ${styles.file}`}>No file</button>
                <button className={`${styles.button} ${styles.add}`}>Add</button>
            </form>
        </div>
    )
}

export default CardMaker;