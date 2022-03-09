import React, { useRef } from 'react';
import styles from './cardMaker.module.css';

const CardMaker = (props) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const temaRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const textareaRef = useRef();
    const fileRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(companyRef.current.value)
        console.log(temaRef.current.value)
        console.log(emailRef.current.value)
        console.log(nameRef.current.value)
        console.log(textareaRef.current.value)
        console.log(titleRef.current.value)
        console.log(fileRef.current.value)
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.sectionTitle}>Card Maker</h1>
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
        </div>
    )
}

export default CardMaker;