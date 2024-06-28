import React, { useState, useEffect } from 'react';
import styles from './ProjectsShow.module.scss';
import plus from '../../../assets/images/plus.svg';
import supress from '../../../assets/images/delete.svg';
import update from '../../../assets/images/update.svg';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { ProjectForm } from "../ProjectForm/ProjectForm";
import { getProjects, deleteProject } from '../../../lib/common';

// Component to display the projects in the admin panel
export const ProjectsShow = () => {
    const [projects, setProjects] = useState(null);
    const [created, setCreated] = useState(false);
	const [addProject, setAddProject] = useState(false);
    const [updateProject, setUpdateProject] = useState(false);
    const [modified, setModified] = useState(false);
    const [itemModif, setItemModif] = useState(null);

    useEffect(() => {
        async function getProjectsList() {
            const data = await getProjects();
            if (data) {
                setProjects(data);
            }
        }
        getProjectsList();
    }, [projects]);


    return (
            <div className={styles.ProjectsContainer}>
                <div className={styles.addProjectButtonContainer}>
                    <button className={ styles.addProjectButton } onClick={() => setAddProject(true) }>
						<p>Ajouter un projet</p>
						<img src={plus} alt="Add a project" />
				    </button>
                </div>
                {addProject ? (
					!created ? (<>
                        <button className={styles.backButton} onClick={() => setAddProject(false) }>
							<div className={styles.modularBackground}>
							</div>
						</button>
                        <div className={styles.modularContainer}>
                            <h2>Ajout de Projet</h2>
                            <ProjectForm validate={setCreated} />
                        </div>
                    </>
						
					) : (
						<div className={styles.modularBackground}>
							<div className={styles.modularContainer}>
								<p>Projet uploadé avec Succès !</p>
								<button onClick={() => { setAddProject(false); setCreated(false); }}>Retour</button>
							</div>
						</div>
					)
				) : null}
                {updateProject ? (
					!modified ? (<>
                        <button className={styles.backButton} onClick={() => setUpdateProject(false) }>
							<div className={styles.modularBackground}>
							</div>
						</button>
                        <div className={styles.modularContainer}>
                            <h2>Modification de Projet</h2>
                            <ProjectForm validate={setModified}  project={itemModif}/>
                        </div>
                    </>
						
					) : (
						<div className={styles.modularBackground}>
							<div className={styles.modularContainer}>
								<p>Projet modifié avec Succès !</p>
								<button onClick={() => { setUpdateProject(false); setModified(false); }}>Retour</button>
							</div>
						</div>
					)
				) : null}
                { projects ? projects.map((item) => (
                    <div className={styles.MappedItemContainer} >
                        <div className={styles.MappedItemContent}>
                            <ProjectItem key={item.id} project= {item} />
                            <button className={styles.SupressBtn}onClick={ () => { deleteProject(item.id)} } ><img src={supress} alt="Supprimer" /></button>
                            <button className={styles.UpdateBtn} onClick={ () => { setUpdateProject(true); setItemModif(item);} } ><img src={update} alt="Modifier" /></button>
                        </div>
                    </div>
                )) : <h1>Chargement en cours...</h1>}
            </div>
    );
};
