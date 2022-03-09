import React from 'react';
import styles from './cardPreview.module.css';

const CardPreview = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Card Preview</h1>
        </div>
    )
}

export default CardPreview;