"use client";

import styles from './common.module.css';
import tools_styles from './tools.module.css';


import Header from '../../../../component/Header';
import Fotter from "../../../../component/Fotter" 

import BackIndexComponent from '../../../../component/pageComponent/BackIndexComponent'

import ToolsInterface from "./ToolsInterfaceContainer";
import PreviewBox from "./Preview/preview";
import OutputBox from "./Preview/output";


// OBS StyleSheetまとめ
export default function Home()
{
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <div className={tools_styles.twoColomnGrid}>
          {/* メインコンテンツ側 */}
          <div className={tools_styles.toolsContentContainer}>
            <ToolsInterface/>
          </div>
          
          {/* サイドバー側 (スケルトン) */}
          <div className={tools_styles.sidebarContainer}>
            <div className={tools_styles.sidebarSkeleton}>
              <PreviewBox/>
            </div>
          </div>
        </div>

        <div>
          <OutputBox/>
        </div>
      </main>

      <section className={styles.back}>
        <BackIndexComponent/>
      </section>

      <Fotter/>
    </div>
  );
}