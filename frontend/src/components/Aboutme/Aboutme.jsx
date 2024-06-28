import React from 'react';
import styles from './Aboutme.module.scss';

export const Aboutme = () => {
  return (
    <div id="a-propos" className={styles.Aboutmelink}>
      <section className={styles.Aboutme}>
        <h2>Qui suis-je</h2>
        <p>
          Passionné par le monde de l'informatique, j'ai toujours aimé travailler dans ce domaine et je compte bien continuer en ce sens.
        </p>
        <br />
        <p>
          Ayant développé dans divers langages de programmation, ce n'est qu'après avoir quitté l'armée que j'ai décidé de me spécialiser dans le développement web, notamment dans les technologies React.js et Node.js en raison de leur modularité. Cependant, je reste ouvert à l'apprentissage et à l'utilisation d'autres langages et frameworks.
        </p>
        <br />
        <p>
          Diplômé d'une formation chez
          <a href="https://openclassrooms.com/fr/" target="_blank" rel="noreferrer">OpenClassrooms</a>,
          en tant que Développeur Intégrateur Web, j'ai réalisé plusieurs projets incluant la gestion de projet, le front-end et le back-end en utilisant des outils tels que Figma, Trello et Github.
        </p>
        <br />
        <p>
          Actuellement à la recherche d'une entreprise aux alentours d'Orléans pour effectuer une alternance et préparer un Bac +3 (avec un rythme de 3 semaines en entreprise et 1 semaine en école)
        </p>
      </section>

    </div>
  );
}