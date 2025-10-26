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

      <main className={news_styles.newsBox}>
        <NewsContent/>
      </main>

      <section className={styles.back}>
        <BackIndexComponent/>
      </section>

      <Fotter/>
    </div>
  );
}