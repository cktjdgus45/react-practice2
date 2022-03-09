import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Auth from '../../service/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    async function handleClick(e) {
        const socialText = e.currentTarget.innerText; //"Google"
        const auth = new Auth();
        await auth.login(socialText)
            .then(res => {
                const user = res.user;
                navigate("/user", {
                    state: {
                        uid: user.uid
                    }
                });
            });
    }
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.mainboard}>
                <h1 className={styles.title}>Login</h1>
                <button onClick={handleClick} className={styles.button}>Google</button>
                <button onClick={handleClick} className={styles.button}>Github</button>
            </div>
            <Footer />
        </div>
    )
}

export default Login;