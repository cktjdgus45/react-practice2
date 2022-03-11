import React from 'react';
import Auth from '../../service/auth';
import styles from './header.module.css';
import { useNavigate } from "react-router-dom";

const Header = ({ uid }) => {
    const navigate = useNavigate();
    function handleClick() {
        new Auth().logout(uid);
        navigate("/");
    }
    return (
        <div className={styles.header}>
            {
                uid && <button className={styles.button} onClick={handleClick}>Logout</button>
            }
            <img src="/images/logo.png" alt="" className={styles.logo} />
            <p className={styles.content}>Business Card Maker</p>
        </div>
    )
}

export default Header;