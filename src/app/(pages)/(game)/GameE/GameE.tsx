
import styles from './GameE.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameE() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameEのテストページです。
          </h1>
        </section>
        </main>
    );
}