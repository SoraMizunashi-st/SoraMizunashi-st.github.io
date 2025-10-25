"use client";
import styles from './privacy.module.css';

import PrivacyContent from './privacy.mdx';

// メインページコンポーネント
export default function privacy() {
    return (

      <>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            プライバシーポリシー
          </h1>
        </section>

        <section className={styles.contentBox}>
          <PrivacyContent />
        </section>

        <section className={styles.section}>
          <h3>1. 個人情報の収集について</h3>
          <p>当サイトは、ユーザーの氏名、住所、メールアドレスなどの特定の個人を識別できる情報（個人情報）を、本サービスを通じて一切収集いたしません。... </p>
          
          <br></br>
        
          <h3>2. アクセス解析ツールについて</h3>
          <p>当サイトでは、サービスの改善および品質向上のために、Google Analyticsなど（またはその他の利用ツールがあれば記載）の外部サービスを利用しています。これらのツールは、個人を特定する情報を含まない**匿名化された情報（トラフィックデータ）**のみを収集します。</p>
        </section>
        <p className={styles.updateDate}>最終更新日: 2025年10月25日</p>
      </>
    );
}