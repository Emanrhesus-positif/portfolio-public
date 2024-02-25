import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { getProjects } from '../../../lib/common';
import styles from './ProjectViewer.module.scss';
export const ProjectViewer = () => {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const displayProjects = () => (projects ? projects.map((project) => <ProjectItem project={project} key={project.id} />) : <h1>Vide</h1>);
  
    useEffect(() => {
      async function getProjectsList() {
        const data = await getProjects();
        if (data) {
          setProjects(data);
          setLoading(false);
        }
      }
      getProjectsList();
    }, []);
    return (
        <div className={styles.projectsViewer}>
            {loading ? <h1>Chargement en cours...</h1> : displayProjects()}
        </div>
    );
}