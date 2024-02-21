import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import profilePic from '../../assets/images/ProfilePic.webp';

export const Header = () => {

  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log(scroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scroll ? styles.downed : styles.Header}>
      <div className="container">
        <img src={profilePic} alt="Photo romain bories" />
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/#a-propos" activeClassName={styles.activeLink} onClick={(event) => handleClick(event, 'a-propos')}>
              Qui-suis-je
            </NavLink>
          </li>
          <li>
            <NavLink to="/#travaux" activeClassName={styles.activeLink} onClick={(event) => handleClick(event, 'travaux')}>
              Travaux
            </NavLink>
          </li>
          <li>
              <NavLink to="/#contact" activeClassName={styles.activeLink} onClick={(event) => handleClick(event, 'contact')}>
                Contact
              </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};