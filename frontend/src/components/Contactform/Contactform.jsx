import React, { useState } from 'react';
import styles from './Contactform.module.scss';
import { API_ROUTES } from '../../utils/constants';

export const Contactform = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(API_ROUTES.MAIL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            alert('Email sent successfully.');
        } else {
            alert('There was an error sending the email.');
        }
    };

    return (
        <div className={styles.Link}>
            <form id="contact" className={styles.contact} onSubmit={handleSubmit}>
            <label for="name">Nom :</label>
            <input id="name" type="text"value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" required />
            <label for="email">E-mail :</label>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <label for="message">Message :</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
            <button type="submit">Envoyer</button>
        </form>
        </div>
        
    );
};