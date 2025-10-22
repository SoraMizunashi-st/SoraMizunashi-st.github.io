import styles from './common.module.css'; // 専用CSSモジュールをインポート

import Header from '../../../component/Header';

import Privacy from './about_abseil';

import Fotter from '../../../component/Fotter'; 

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <Privacy/>
      </main>

      <Fotter/>
    </div>
  );
}