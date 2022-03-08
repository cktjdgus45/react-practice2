import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img src="/images/logo.png" alt="" className={styles.logo} />
            <p className={styles.content}>Business Card Maker</p>
        </div>
    )
}

export default Header;