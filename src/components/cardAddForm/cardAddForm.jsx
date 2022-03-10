import React, { useRef } from 'react';
import styles from './cardAddForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const CardAddForm = ({ setCards, write, card }) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const temaRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const textareaRef = useRef();
    const fileRef = useRef();
    async function handleSubmit(e) {
        e.preventDefault();
        const id = uuidv4();
        const name = nameRef.current.value;
        const company = companyRef.current.value;
        const title = titleRef.current.value;
        const email = emailRef.current.value;
        const message = textareaRef.current.value;
        const tema = temaRef.current.value;
        const profile = fileRef.current.value;
        write(id, name, company, title, email, message, tema, profile);
        await setCards(prev => {
            const cards = [...prev];
            const card = {
                id,
                name,
                company,
                title,
                email,
                message,
                tema,
                profile,
            }
            const updated = [...cards, card];
            return updated;
        })
        nameRef.current.value = '';
        companyRef.current.value = '';
        titleRef.current.value = '';
        emailRef.current.value = '';
        textareaRef.current.value = '';
        fileRef.current.value = '';
    }
    return (
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" className={styles.name} placeholder='Name' />
            <input ref={companyRef} type="text" className={styles.company} placeholder='Company' />
            <select ref={temaRef} className={styles.tema} >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input ref={titleRef} type="text" className={styles.title} placeholder='Title' />
            <input ref={emailRef} type="text" className={styles.email} placeholder='Email' />
            <input ref={textareaRef} type="textarea" className={styles.textarea} placeholder='Message' />
            <input ref={fileRef} accept='image/*' type="file" className={`${styles.button} ${styles.file}`}></input>
            <button className={`${styles.button} ${styles.add}`}>Add</button>
        </form>
    )
}

export default CardAddForm;