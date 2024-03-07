import React from 'react';
import styles from './Aboutme.module.scss';


export const Aboutme = () => {
  return (
    <div id="a-propos" className={styles.Aboutmelink}>
      <section className={styles.Aboutme}>
      <h2>Qui suis-je</h2>
      <p>
        Passionné par le monde de l'informatique, j'ai toujours apprécié travailler dans ce domaine et je compte bien continuer en ce sens.
      </p> 
        <br />
      <p>
        Ayant développé dans divers langages de programmation, ce n'est qu'après avoir quitté l'armée que j'ai décidé de me spécialiser dans le développement web, plus particulièrement dans les technologies React.js et Node.js.
      </p>
        <br />
      <p>
        Je suis actuellement en formation chez 
        <a href="https://openclassrooms.com/fr/" target="_blank" rel="noreferrer"> Open Classrooms </a> 
        dans le but de devenir développeur web junior, j'ai pu réaliser plusieurs projets avec des parties gestion de projet / front-end / back-end en utilisant des outils comme Figma / Trello / Github...
      </p>
        <br />
      <p>
        Je suis actuellement à la recherche d'un emploi pour améliorer, consolider mes compétences et en apprendre de nouvelles.
      </p>
    </section>
    </div>
  );
}