import React, { useRef } from 'react';
import styles from './cardAddForm.module.css';

const CardAddForm = ({ setCards }) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const temaRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const textareaRef = useRef();
    const fileRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const card = {
            name: nameRef.current.value,
            company: companyRef.current.value,
            title: titleRef.current.value,
            email: emailRef.current.value,
            message: textareaRef.current.value,
            tema: temaRef.current.value,
            profile: fileRef.current.value,
        }
        setCards(prev => {
            const updated = [...prev, card];
            return updated;
        })
    }
    return (
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" className={styles.name} placeholder='Name' />
            <input ref={companyRef} type="text" className={styles.company} placeholder='Company' />
            <select ref={temaRef} className={styles.tema}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input ref={titleRef} type="text" className={styles.title} placeholder='Title' />
            <input ref={emailRef} type="text" className={styles.email} placeholder='Email' />
            <input ref={textareaRef} type="textarea" className={styles.textarea} placeholder='Message' />
            <input ref={fileRef} type="file" className={`${styles.button} ${styles.file}`}></input>
            <button className={`${styles.button} ${styles.add}`}>Add</button>
        </form>
    )
}

export default CardAddForm;