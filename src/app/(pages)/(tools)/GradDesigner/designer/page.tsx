"use client";

import React, { useMemo, useState } from "react";
import styles from "./designer.module.css";

export default function GradientDesigner() {
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState<number>(90);
  const [color1, setColor1] = useState<string>("#ff7a18");
  const [color2, setColor2] = useState<string>("#2b86c5");
  const [pos1, setPos1] = useState<number>(0);
  const [pos2, setPos2] = useState<number>(100);

  const bgValue = useMemo(() => {
    if (type === "linear") {
      return `linear-gradient(${angle}deg, ${color1} ${pos1}%, ${color2} ${pos2}%)`;
    }
    return `radial-gradient(circle, ${color1} ${pos1}%, ${color2} ${pos2}%)`;
  }, [type, angle, color1, color2, pos1, pos2]);

  const cssText = `/* Gradient CSS (example) */\nbackground: ${bgValue};`;

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // 小さなフィードバック
      alert("コピーしました");
    } catch (e) {
      alert("コピーに失敗しました：クリップボードにアクセスできませんでした");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gradient Designer v1.0.0</h2>
      <p>cssのカラープロパティのグラデーション設定が視覚的に作れるツールです。</p>

      <div className={styles.controls}>
        <div className={styles.controlRow}>
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value as any)}>
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </div>

        {type === "linear" && (
          <div className={styles.controlRow}>
            <label>Angle: {angle}°</label>
            <input
              type="range"
              min={0}
              max={360}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
            />
          </div>
        )}

        <div className={styles.controlRow}>
          <label>Color 1</label>
          <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} />
          <input
            className={styles.smallNumber}
            type="number"
            min={0}
            max={100}
            value={pos1}
            onChange={(e) => setPos1(Number(e.target.value))}
          />
          <span>%</span>
        </div>

        <div className={styles.controlRow}>
          <label>Color 2</label>
          <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />
          <input
            className={styles.smallNumber}
            type="number"
            min={0}
            max={100}
            value={pos2}
            onChange={(e) => setPos2(Number(e.target.value))}
          />
          <span>%</span>
        </div>
      </div>

      <div className={styles.previewWrapper}>
        <div className={styles.preview} style={{ background: bgValue }} />
      </div>

      <div className={styles.outputArea}>
        <textarea className={styles.cssArea} readOnly value={cssText} />
        <div className={styles.buttonColumn}>
          <button onClick={() => handleCopy(cssText)}>Copy full CSS</button>
          <button onClick={() => handleCopy(bgValue)}>Copy background value</button>
        </div>
      </div>

      <p className={styles.hint}>プレビューの色や角度を変えて、簡単にグラデーションのCSSを作れます。</p>
    </div>
  );
}
