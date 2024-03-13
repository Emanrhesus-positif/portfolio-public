import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APP_ROUTES } from '../../utils/constants';
import styles from './Header.module.scss';
import profilePic from '../../assets/images/ProfilePic.webp';
import modif from '../../assets/images/modif.svg';
import home from '../../assets/images/home.svg';
import me from '../../assets/images/me.svg';
import works from '../../assets/images/works.svg';
import contact from '../../assets/images/contact.svg';
import mySpace from '../../assets/images/edit.svg';
import login from '../../assets/images/login.svg';
import logout from '../../assets/images/logout.svg';


export const Header = ({ user, setUser }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerClass, setHeaderClass] = useState(styles.Header);
  
  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        setHeaderClass(styles.HeaderHide);
      } else {
        setHeaderClass(styles.Header);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const navigate = useNavigate();
  const disconnect = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };

  return (
    <header className={headerClass}>
  <div className="container">
    <img src={profilePic} alt="Photo romain bories" />
    <ul>
      <li className={styles.Home}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>
        <img src={home} />
          <span className={styles.visuallyHidden}>Accueil</span>
          
        </NavLink>
      </li>
      <li className={styles.Me}>
        <NavLink to="/#a-propos" activeClassName={styles.activeLink} onClick={(event) => handleClick(event, 'a-propos')}>
        <img src={me} />
          <span className={styles.visuallyHidden}>Qui-suis-je</span>
          
        </NavLink>
      </li>
      <li className={styles.Works}>
        <NavLink to="/#travaux" activeClassName={styles.activeLink} onClick={(event) => handleClick(event, 'travaux')}>
        <img src={works} />
          <span className={styles.visuallyHidden}>Travaux</span>
          
        </NavLink>
      </li>
      <li className={styles.Contact}>
        <NavLink to="/#contact" activeClassName={styles.activeLink} onClick={(event) => handleClick(event, 'contact')}>
        <img src={contact} />
          <span className={styles.visuallyHidden}>Contact</span>
          
        </NavLink>
      </li>
      <li className={styles.MySpace}>
        {!user ?
          <></>
        :
        <NavLink to={APP_ROUTES.PERSONAL_SPACE} activeClassName={styles.activeLink}>
          <img src={mySpace} />
          <span className={styles.visuallyHidden}>Mon Espace</span>
          
        </NavLink>
        }
      </li>
      <li className={styles.Login}>
        {!user ? 
          <NavLink to="/Connexion" >
            <img src={login} ></img>
            </NavLink> 
        : <li className={styles.logout} tabIndex={0} role="button" onKeyUp={disconnect} onClick={disconnect}>
            <img src={logout} />
            <span  className={styles.visuallyHidden} >
            Me déconnecter
          </span>
            
          </li>
        }
      </li>
    </ul>
  </div>
</header>
  );
};