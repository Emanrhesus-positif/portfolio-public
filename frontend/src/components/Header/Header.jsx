import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APP_ROUTES } from '../../utils/constants';
import styles from './Header.module.scss';
import profilePic from '../../assets/images/ProfilePic.webp';
import modif from '../../assets/images/modif.svg';

export const Header = ({ user, setUser }) => {
  

  //Used to navigate through the main page content
  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //used to change Header parameters when moving down on the page
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

  const navigate = useNavigate();
  const disconnect = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };

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
          <li>
            {!user ?
              <></>
            :
            <NavLink to={APP_ROUTES.PERSONAL_SPACE} activeClassName={styles.activeLink}>
              Mon Espace
            </NavLink>
            }
          </li>
          <li>
            {!user ? 
              <NavLink to="/Connexion" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>
                <img src={modif} ></img>
                </NavLink> 
            : 
              <span tabIndex={0} role="button" onKeyUp={disconnect} onClick={disconnect}>
                Me déconnecter
              </span> 
            }
          </li>
        </ul>
      </div>
    </header>
  );
};