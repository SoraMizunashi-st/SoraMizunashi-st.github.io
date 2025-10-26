// components/BackHomeComponent/BackHomeComponent.tsx
'use client'; // 常に画面右下に表示され、クリックイベントを処理するためClient Componentとする

import Link from 'next/link';
import styles from './BackHomeComponent.module.css';

// 💡 MUIの代わりに、Google Fontsのアイコンを使用します
//    （プロジェクトにMUIを導入していない可能性を考慮し、依存関係を最小化）
//    Next.jsプロジェクトでアイコンを使用する場合、通常は以下のように対応します
//    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
//    を RootLayout (app/layout.tsx) に追加する必要があります。

const HomeIcon = () => (
    // Google Material Icons の Home アイコンを使用
    <span className="material-icons">
        home
    </span>
);

export default function BackHomeComponent() {
    return (
        <div className={styles.floatingButton}>
            {/* Home (index) に戻るリンク */}
            <Link href="/" className={styles.linkButton} aria-label="Homeに戻る">
                <HomeIcon />
            </Link>
        </div>
    );
}