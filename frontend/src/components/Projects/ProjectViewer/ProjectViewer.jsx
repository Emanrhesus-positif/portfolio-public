import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { getProjects } from '../../../lib/common';
import styles from './ProjectViewer.module.scss';
import arrowleft from '../../../assets/images/doubleleft.svg';
import arrowright from '../../../assets/images/doubleright.svg';

export const ProjectViewer = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const displayProjects = () => {
    if (projects) {
      return projects.map((project, index) => (
        <div className={`${styles.projectItem} ${index === currentProjectIndex ? styles.current : ''}`}>
        <ProjectItem
          project={project}
          key={project.id}
        />
        </div>
      ));
    } else {
      return <h1>Vide</h1>;
    }
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

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
    <div id="travaux" className={styles.projectslink}>
      <br />
      <div className={styles.projectsViewer}>
        {loading ? (
          <h1>Chargement en cours...</h1>
        ) : (
          <>
            <button className={styles.buttonleft} onClick={handlePreviousProject}><img src={ arrowleft } alt="left"></img></button>
            {displayProjects()}
            <button className={styles.buttonright} onClick={handleNextProject}><img src={ arrowright } alt="right"></img></button>
          </>
        )}
      </div>
    </div>
  );
};
