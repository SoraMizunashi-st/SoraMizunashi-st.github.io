// components/ProjectCarousel.tsx
'use client'; // 👈 クライアントコンポーネント宣言を忘れずに

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './Carousel.module.css'; // 専用のCSS Modulesを想定

// ダミーデータ（実際は外部からpropsとして渡すのが理想的）
const projects = [
    { id: 1, title: 'Project A', link: '/project/a' },
    { id: 2, title: 'Project B', link: '/project/b' },
    { id: 3, title: 'Project C', link: '/project/c' },
    { id: 4, title: 'Project D', link: '/project/d' },
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
            <div className={styles.projectCard}>
              <h3>{project.title}</h3>
              <a href={project.link}>プレイする!!</a>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}