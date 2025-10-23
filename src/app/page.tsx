import styles from './page.module.css';

import Header from '../component/Header';

import HeroSection from '../component/HeroSection';
import TopSection from '../component/TopSection';
import AboutSection from '../component/AboutSection';
import GameProjectSection from '../component/GameProjectSection';
import NewsSection from '../component/NewsSection';
import ProjectSection from '../component/TopicProjectSection';


import Fotter from '../component/Fotter'; 

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <HeroSection/>
        <TopSection/>
        <AboutSection/>
        <GameProjectSection/>
        <NewsSection/>
        <ProjectSection/>
      </main>

      <Fotter/>
    </div>
  );
}