import React from 'react';
import styles from './ProjectItem.module.scss';

export const ProjectItem = ({ project, auth }) => {

  const adminVerif = () => {
    
  }
  
  return (
    <div className={styles.ProjectItem}>
      <img src={project.imageUrl} alt={project.title} />
      <div className={styles.ProjectItemContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.gitHubUrl} target="_blank" rel="noreferrer">
          GitHub du projet
        </a>
      </div>
    </div>
  );
};
