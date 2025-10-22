
import styles from './my_tmp.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function my_tmp() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            テストページです。
          </h1>
        </section>
        </main>
    );
}