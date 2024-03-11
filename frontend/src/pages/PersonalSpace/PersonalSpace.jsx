import React, { useState } from 'react';
import { ProjectForm } from "../../components/Projects/ProjectForm/ProjectForm";
import { ProjectsShow } from '../../components/Projects/ProjectsShow/ProjectsShow';
import styles from './PersonalSpace.module.scss';

export const PersonalSpace = () => {
	const [created, setCreated] = useState(false);
	const [addProject, setAddProject] = useState(false);
	const [viewProject, setViewProject] = useState(false);


	return (
		<div className={styles.container}>
			<div className={styles.sideMenu}>
				<button onClick={() => { 
					setAddProject(true); 
					setViewProject(false);
					setCreated(false);
				}}>Ajouter un projet</button>
				<button onClick={() => { setAddProject(false); setViewProject(true) }}>Voir les projets</button>
			</div>
			<div className={styles.content}>
				{addProject ? (
					!created ? (
						<>
							<h1>Ajout de Projet</h1>
							<ProjectForm validate={setCreated} />
						</>
					) : (
						<div className={styles.Created}>
							<p>Projet uploadé avec Succès !</p>
						</div>
					)
				) : null}
				{viewProject ? (
					<ProjectsShow />
				) : null}
			</div>
		</div>
	);
}
