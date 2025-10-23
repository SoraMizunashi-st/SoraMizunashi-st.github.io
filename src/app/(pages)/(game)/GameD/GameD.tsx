
import styles from './GameD.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameD() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameDのテストページです。
          </h1>
        </section>
        </main>
    );
}