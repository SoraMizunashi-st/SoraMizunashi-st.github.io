import styles from './common.module.css'; // 専用CSSモジュールをインポート

import Header from '../../../../component/Header';

import GameF from './GameF';

import Fotter from '../../../../component/Fotter'; 

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <GameF/>
      </main>

      <Fotter/>
    </div>
  );
}