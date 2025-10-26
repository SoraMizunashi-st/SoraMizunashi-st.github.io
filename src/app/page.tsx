import styles from './page.module.css';

import Header from '../component/Header';

import HeroSection from '../component/HeroSection';
import TopSection from '../component/TopSection';
import AboutSection from '../component/AboutSection';
import GameProjectSection from '../component/GameProjectSection';
import ToolsSection from '../component/ToolsSection';
import NewsSection from '../component/NewsSection';
import ProjectSection from '../component/TopicProjectSection';
import FaqSection from '../component/FaqSection';


import Fotter from '../component/Fotter'; 

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <HeroSection/>
        <TopSection/>
        <NewsSection/>
        <GameProjectSection/>
        <ToolsSection/>
        <ProjectSection/>
        <FaqSection/>
        <AboutSection/>
      </main>

      <Fotter/>
    </div>
  );
}