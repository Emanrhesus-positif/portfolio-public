import { Contactform } from '../../components/Contactform/Contactform';
import { Aboutme } from '../../components/Aboutme/Aboutme';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import styles from './Home.module.scss';
import { Titlename } from '../../components/Titlename/Titlename';


export const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <main className={styles.main}>
        <Titlename />
        <Aboutme />
        <Contactform />  
      </main>
      <Footer />
    </div>
  );
};
