import React, { useState, useEffect } from 'react';
import styles from './ProjectsShow.module.scss';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { getProjects, deleteProject } from '../../../lib/common';

export const ProjectsShow = () => {
    const [projects, setProjects] = useState(null);

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
        <div className={styles.Container}>
            <h1>Tous les projets:</h1>
            <div className={styles.ProjectsContainer}>

                { projects ? projects.map((item) => (
                    <div>
                        <ProjectItem key={item.id} project= {item} />
                        <button onClick={ () => { deleteProject(item.id)} } >Supprimer</button>
                    </div>
                )) : <h1>Chargement en cours...</h1>}
            </div>
        </div>
    );
};