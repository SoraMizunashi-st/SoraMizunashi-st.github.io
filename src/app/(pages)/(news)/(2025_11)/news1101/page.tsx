"use client";

import styles from './common.module.css';
import news_styles from './news.module.css';


import Header from '../../../../../component/Header';
import Fotter from "../../../../../component/Fotter" 

import NewsContent from "./NewsContent.mdx";

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={news_styles.newsBox}>
        <NewsContent/>
      </main>

      <Fotter/>
    </div>
  );
}