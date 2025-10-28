"use client";

import styles from './common.module.css';
import tools_styles from './tools.module.css';


import Header from '../../../../component/Header';
import Fotter from "../../../../component/Fotter" 

import BackIndexComponent from '../../../../component/pageComponent/BackIndexComponent'

import ToolsInterface from "./ToolsInterfaceContainer";
import PreviewBox from "./Preview/preview";
import OutputBox from "./Preview/output";

import ToolsInterfaceContainer from "./ToolsInterfaceContainer"; // これが全てを管理

// OBS StyleSheetまとめ
export default function Home()
{
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        {/* ToolsInterfaceContainerが全体のレイアウトとState管理を担当 */}
        <ToolsInterfaceContainer />
      </main>

      <section className={styles.back}>
        <BackIndexComponent/>
      </section>

      <Fotter/>
    </div>
  );
}