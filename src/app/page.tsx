import styles from './page.module.css';

import Header from '../component/Header';

import HeroSection from '../component/HeroSection';
import AboutSection from '../component/AboutSection';
import ProjectSection from '../component/ProjectSection';

import Fotter from '../component/Fotter'; 

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
      </main>

      <Fotter/>
    </div>
  );
}