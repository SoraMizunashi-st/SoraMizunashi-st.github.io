// components/ProjectCarousel.tsx
'use client'; // 👈 クライアントコンポーネント宣言を忘れずに

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './Carousel.module.css'; // 専用のCSS Modulesを想定

// ダミーデータ（実際は外部からpropsとして渡すのが理想的）
const projects = [
    { 
        id: 1, 
        title: '青系だけの色見本', 
        link: '/TheBlue',
        // 💡 説明文を追加
        description: 'Webデザインに役立つ青系のカラーコードを網羅。明度・彩度別のフィルタリング機能も搭載した専門ツールです。',
        thumbnail: '/carousel/theblue.webp'
    },
    { 
        id: 2, 
        title: 'Project B', 
        link: '/project/b',
        description: 'このプロジェクトは、〇〇の課題を解決するために開発されました。',
        thumbnail: '/carousel/s001.jpg'
    },
    { 
        id: 3, 
        title: 'Project C', 
        link: '/project/c',
        description: 'ユーザーインターフェースの使いやすさを追求した、実験的なデザインです。',
        thumbnail: '/carousel/s001.jpg'
    },
    { 
        id: 4, 
        title: 'Project D', 
        link: '/project/d',
        description: 'データ駆動型のビジュアライゼーションを目的とした、最新の技術デモです。',
        thumbnail: '/carousel/s001.jpg'
    },
];

export default function Carousel() {
  // Splideのオプションを定義
  const options = {
    type: 'loop',      // 無限ループ
    perPage: 3,        // 1ページあたりの表示数
    focus: 'center',   // 中央の要素をフォーカス
    gap: '2rem',       // スライド間のスペース
    autoplay: true,    // 自動再生
    interval: 5000,    // 自動再生の間隔（5秒）
    arrows: true,      // 矢印ボタン表示
    pagination: false, // ページネーション（ドット）非表示
    // レスポンシブ設定
    breakpoints: {
      1024: { perPage: 2 }, // PC (L)以下は2列
      768: { perPage: 1 },  // タブレット以下は1列
    },
  }as const;

  return (
    <div className={styles.carouselContainer}>
      {/* Splideコンポーネントでラップし、optionsを渡す
        aria-labelはアクセシビリティ向上のため付与することを推奨 
      */}
      <Splide options={options} aria-label="Our recent projects slideshow">
        {projects.map(project => (
          // SplideSlideコンポーネントで各要素をラップ
          <SplideSlide key={project.id}>
            <div className={styles.projectCard} style={{ backgroundImage: `url(${project.thumbnail})` }} >
              <h3>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a href={project.link}>使ってみる！</a>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}