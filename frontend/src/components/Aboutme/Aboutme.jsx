import React from 'react';
import styles from './Aboutme.module.scss';


export const Aboutme = () => {
  return (
    <section id="a-propos" className={styles.Aboutme}>
      <h2>Qui suis-je</h2>
      <p>
        Passionné par le monde de l'informatique, j'ai toujours travaillé dans ce domaine, ayant développé dans divers langages de programmation, ce n'est qu'après avoir quitté l'armée que j'ai décidé de me spécialiser dans le développement web, et plus particulièrement dans les technologies React.js et Node.js.
        Je suis actuellement en formation chez OpenClassrooms pour devenir développeur web junior et ayant terminé tous les projets, je suis à la recherche d'un travail pour améliorer mes compétences et en apprendre de nouvelles.
      </p>
    </section>
  );
}