"use client";

import styles from './common.module.css';
import tools_styles from './tools.module.css';


import Header from '../../../../component/Header';
import Fotter from "../../../../component/Fotter" 

import BackIndexComponent from '../../../../component/pageComponent/BackIndexComponent'

import ToolsContent from "./ToolsContent.mdx";

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <div className={tools_styles.twoColomn}>
          {/* メインコンテンツ側 */}
          <div className={tools_styles.toolsContentContainer}>
            <ToolsContent/>
          </div>
          
          {/* サイドバー側 (スケルトン) */}
          <div className={tools_styles.sidebarContainer}>
            {/* <Sidebar/>が将来ここに入ります */}
            <div className={tools_styles.sidebarSkeleton}>
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