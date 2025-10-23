import styles from './common.module.css'; // 専用CSSモジュールをインポート

import Header from '../../../../component/Header';

import GameH from './GameH';

import Fotter from '../../../../component/Fotter'; 

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <GameH/>
      </main>

      <Fotter/>
    </div>
  );
}