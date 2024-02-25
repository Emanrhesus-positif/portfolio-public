import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../lib/customHooks';
import { APP_ROUTES } from '../../utils/constants';
import { ProjectForm } from "../../components/Projects/ProjectForm/ProjectForm";
import styles from './PersonalSpace.module.scss';

export const PersonalSpace = () => {
  const [created, setCreated] = useState(false);
  return (
    <div className="content-container">

      <div className={styles.Container}>
        {!created ? (
          <>
            <h1>Ajouter un projet</h1>
            <p>tous les champs sont obligatoires</p>
            <ProjectForm validate={setCreated} />
          </>
        ) : (
          <div className={styles.Created}>
            <p>Projet uploadé</p>
            <Link to="/" className="button">Retour à l&apos;accueil</Link>
          </div>

        )}

      </div>
    </div>
  );
}