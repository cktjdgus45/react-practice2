import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <FontAwesomeIcon className={styles.logoIcon} icon={faYoutube} />
                <h3 className={styles.logoTitle}>Youtube</h3>
            </div>
            <form className={styles.searchForm}>
                <input type="text" className={styles.searchInput} />
                <button className={styles.searchBtn}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </header>
    )
}

export default Header;