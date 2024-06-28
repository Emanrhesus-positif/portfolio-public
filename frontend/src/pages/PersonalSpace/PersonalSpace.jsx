import React from 'react';
import { ProjectsShow } from '../../components/Projects/ProjectsShow/ProjectsShow';
import styles from './PersonalSpace.module.scss';

// Component to display the projects in the admin panel
export const PersonalSpace = () => {

	return (
		<div className={styles.container}>
			<ProjectsShow />
		</div>
	);
}
