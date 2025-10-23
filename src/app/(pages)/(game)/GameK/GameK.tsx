
import styles from './GameK.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameK() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameKのテストページです。
          </h1>
        </section>
        </main>
    );
}