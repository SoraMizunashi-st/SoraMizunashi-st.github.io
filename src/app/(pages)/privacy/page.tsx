import styles from './common.module.css'; // 専用CSSモジュールをインポート

import Header from '../../../component/Header';

import Privacy from './Privacy';

import BackIndexComponent from '../../../component/pageComponent/BackIndexComponent'

import Fotter from '../../../component/Fotter'; 

// メインページコンポーネント
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <Privacy/>

        <section className={styles.back}>
          <BackIndexComponent/>
        </section>

      </main>

      <Fotter/>
    </div>
  );
}