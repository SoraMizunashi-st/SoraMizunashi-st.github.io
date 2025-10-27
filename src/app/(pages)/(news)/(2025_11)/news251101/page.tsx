"use client";

import styles from './common.module.css';
import news_styles from './news.module.css';


import Header from '../../../../../component/Header';
import Fotter from "../../../../../component/Fotter" 

import BackIndexComponent from '../../../../../component/pageComponent/BackIndexComponent'

import NewsContent from "./NewsContent.mdx";

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <div className={news_styles.tmpGrid}>
          {/* メインコンテンツ側 */}
          <div className={news_styles.toolsContentContainer}>
            <NewsContent/>
          </div>
          
          {/* サイドバー側 (スケルトン) */}
          <div className={news_styles.sidebarContainer}>
            {/* <Sidebar/>が将来ここに入ります */}
            <div className={news_styles.sidebarSkeleton}>
              {/* サイドバーのコンテンツが非表示の場合は、ここが空になります */}
            </div>
          </div>
        </div>
      </main>

      <section className={styles.back}>
        <BackIndexComponent/>
      </section>

      <Fotter/>
    </div>
  );
}