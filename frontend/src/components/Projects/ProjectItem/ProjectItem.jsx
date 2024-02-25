import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProjectItem.module.scss';

export const ProjectItem = ({ project }) => {
  return (
    <div className={styles.ProjectItem}>
      <img src={project.imageUrl} alt={project.title} />
      <div className={styles.ProjectItemContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.gitHubUrl} target="_blank" rel="noreferrer">
          Voir le projet
        </a>
        <Link to={`/projects/${project._id}`}>Voir les détails</Link>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    gitHubUrl: PropTypes.string,
  }).isRequired,
};