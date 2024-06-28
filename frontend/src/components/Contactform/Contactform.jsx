import React, { useState } from 'react';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg'
import styles from './Contactform.module.scss';
import { API_ROUTES } from '../../utils/constants';
import { handleSubmit } from '../../../lib/common';

// Component to display the contact form and contact information
export const Contactform = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const OnSubmit = async (event) => {
        await handleSubmit({name, email, message});

    return (
        <div id="contact" className={styles.ContactLink}>
            <div className={styles.ContactContainer}>
                <form className={styles.Contact} onSubmit={OnSubmit}>
                    <label for="name">Nom :</label>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" required />
                    <label for="email">E-mail :</label>
                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="mail@mail.com" required />
                    <label for="message">Message :</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
                    <button type="submit">Envoyer</button>
                </form>
                <div className={styles.ContactInfo}>
                    <h2>Contact</h2>
                    <p>Vous pouvez m'envoyer un message directement via le formulaire ou bien </p>
                    <p>me contacter par mail à l'adresse suivante : <a href="mailto:romain.bories09@gmail.com">romain.bories09@gmail.com</a> </p>
                    <p>Vous pouvez également me contacter par téléphone au 06 81 09 13 70</p>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/romain-bories-404386113/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
                        <a href="https://github.com/Emanrhesus-positif/" target="_blank" rel="noreferrer"><img src={github} alt="GitHub"></img></a>
                    </div>
                </div>
            </div>
        </div>

    );
};