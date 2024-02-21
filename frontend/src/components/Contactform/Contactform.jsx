import React from 'react';
import styles from './Contactform.module.scss';

export const Contactform = () => {
    return (
        <form id="contact" className={styles.contact}>
            <label for="name">Nom :</label>
            <input id="name" type="text"></input>
            <label for="email">E-mail :</label>
            <input id="email" type="text"></input>
            <label for="motive">Raison :</label>
            <input id="motive"type="text"></input>
            <label for="message">Message :</label>
            <textarea id="message" type="text"></textarea>
        </form>
    );
};