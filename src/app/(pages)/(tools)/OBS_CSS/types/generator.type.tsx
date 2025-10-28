import React, { useState, useCallback } from 'react';
import ToolsInterfaceMDX from './ToolsInterface.mdx'; // MDXファイルをインポート

// GeneratorSettings の型定義
export type UserHighlightSettings = {
  highlightColor: string; // ネームハイライト色
  badgeEnabled: boolean;  // バッジ
};

export type GeneratorSettings = {
  // プリセット
  preset: string;

  // (1) 基本スタイル
  basicStyle: {
    fontFamily: string;
    fontSize: number; // Slider値
    textColor: string;
		// 背景を透過にするか
		transparentBackground?: boolean;
    textStrokeEnabled: boolean;
    textStrokeColor: string;
  };

  // (2) アイコン
  icon: {
    enabled: boolean;
    frameShape: string;
    size: number; // Slider値
  };

  // (3) ネームハイライト&バッジ
  highlight: {
    owner: UserHighlightSettings;
    moderator: UserHighlightSettings;
    member: UserHighlightSettings;
    // オプション
    subscribersColoring: boolean;
    firstTimerHighlightEnabled: boolean;
    subscriberHighlightColor: string;
  };

  // (4) 有料コンテンツ対応
  paidContent: {
    colorFillEnabled: boolean; // 金額ごとのカラーリング
    superChatAnimation: string;
    memberShipAnimation: string;
  };

  // (5) アニメーション
  animation: {
    base: string;     // 基本コメントアニメーション (dropdown)
    entry: string;    // 出現時アニメーション (dropdown)
    exit: string;     // 退場時アニメーション (dropdown)
  };

  // (6) パーティクル
  particle: {
    baseEnabled: boolean;
    baseType: string; // dropdown
    entryEnabled: boolean;
    entryType: string; // dropdown
    exitEnabled: boolean;
    exitType: string; // dropdown
  };

  // (7) その他
  other: {
    timestampEnabled: boolean;
    deleteHideEnabled: boolean; // コメント削除非表示
  }
};
// -----------------------------------------------------------------------------------------------------------------

// Stateの初期値（initialSettings）をコンポーネント関数より上に定義
export const initialSettings: GeneratorSettings = {
  preset: 'default',
  basicStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textColor: '#FFFFFF',
		transparentBackground: false,
    textStrokeEnabled: false,
    textStrokeColor: '#000000',
  },
  icon: {
    enabled: true,
    frameShape: 'circle',
    size: 24,
  },
  highlight: {
    owner: { highlightColor: '#FF6666', badgeEnabled: true },
    moderator: { highlightColor: '#6666FF', badgeEnabled: true },
    member: { highlightColor: '#66FF66', badgeEnabled: true },
    subscribersColoring: false,
    firstTimerHighlightEnabled: false,
    subscriberHighlightColor: '#CCCCCC',
  },
  paidContent: {
    colorFillEnabled: true,
    superChatAnimation: 'default',
    memberShipAnimation: 'default',
  },
  animation: {
    base: 'none',
    entry: 'none',
    exit: 'none',
  },
  particle: {
    baseEnabled: false,
    baseType: 'none',
    entryEnabled: false,
    entryType: 'none',
    exitEnabled: false,
    exitType: 'none',
  },
  other: {
    timestampEnabled: false,
    deleteHideEnabled: false,
  },
};