import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.mainboard}>
                <h1 className={styles.title}>Login</h1>
                <button className={styles.button}>Google</button>
                <button className={styles.button}>Github</button>
            </div>
            <Footer />
        </div>
    )
}

export default Login;