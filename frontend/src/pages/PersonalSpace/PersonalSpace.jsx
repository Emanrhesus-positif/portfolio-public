import React from 'react';
import { ProjectsShow } from '../../components/Projects/ProjectsShow/ProjectsShow';
import styles from './PersonalSpace.module.scss';

export const PersonalSpace = () => {

	return (
		<div className={styles.container}>
			<ProjectsShow />
		</div>
	);
}
