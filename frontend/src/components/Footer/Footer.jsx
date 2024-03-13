import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>Copyright 2024 - Romain Bories</p>
      <p>Mentions légales</p>
    </footer>
  );
};