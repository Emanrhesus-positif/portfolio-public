import { Contactform } from '../../components/Contactform/Contactform';
import { Aboutme } from '../../components/Aboutme/Aboutme';

import styles from './Home.module.scss';
import { Titlename } from '../../components/Titlename/Titlename';
import { ProjectViewer } from '../../components/Projects/ProjectViewer/ProjectViewer';
import { Skills } from '../../components/Skills/Skills';

export const Home = () => {
  return (
    <div className={styles.Home}>
      <main className={styles.main}>
        <Titlename />
        <Aboutme />
        <Skills />
        <ProjectViewer/>
        <Contactform />  
      </main>
    </div>
  );
};
