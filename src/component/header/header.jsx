import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Header = ({ setVideos }) => {
    const [query, setQuery] = useState('');
    function handleChange(e) {
        const value = e.target.value;
        setQuery(value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${process.env.REACT_APP_APIKEY}`)
            .then(res => setVideos(res.data.items))
            .catch(e => console.log(e));
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <FontAwesomeIcon className={styles.logoIcon} icon={faYoutube} />
                <h3 className={styles.logoTitle}>Youtube</h3>
            </div>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} className={styles.searchInput} placeholder="Seach..." />
                <button className={styles.searchBtn}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </header>
    )
}

export default Header;