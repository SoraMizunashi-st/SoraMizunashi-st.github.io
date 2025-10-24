// content/GameCore.tsx

"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import game_styles from './GameCore.module.css'; // スタイルはCSSモジュールで管理

// ----------------------------------------
// ★★★ ダミーのシーンコンポーネント (Props型定義済み) ★★★
// ----------------------------------------

interface SceneProps {
    // 画面遷移で使うコールバックを定義（全てオプショナル）
    onNext?: () => void;
    onResume?: () => void;
    onRestart?: () => void;
}

const TitleScene = ({ onNext }: SceneProps) => (
    <div className={game_styles.sceneOverlay}>
        <h1>GAME TITLE</h1>
        <p>Press ENTER to START</p>
    </div>
);

const MainGameScene = () => (
    <div className={game_styles.sceneOverlay}>
        <h1>MAIN GAME AREA</h1>
        <p>Press ENTER to PAUSE</p>
    </div>
);

const PauseScene = ({ onResume }: SceneProps) => (
    <div className={game_styles.sceneOverlay}>
        <h1>PAUSED</h1>
        <p>Press ENTER to RESUME</p>
    </div>
);

const GameOverScene = ({ onRestart }: SceneProps) => (
    <div className={game_styles.sceneOverlay}>
        <h1>GAME OVER</h1>
        <p>Press ENTER to RESTART</p>
    </div>
);

// ----------------------------------------
// ★★★ ゲームロジックの「クラス化」と「状態管理」 ★★★
// ----------------------------------------

const FRAME_INTERVAL_MS = 1000 / 60; // 60 FPS ロック

export enum GameScene {
    Title = 'TITLE',
    MainGame = 'MAINGAME',
    Pause = 'PAUSE',
    GameOver = 'GAMEOVER',
}

interface GameState {
    frame: number;
    isRunning: boolean;
    currentScene: GameScene;
    // 実際のゲームの状態をここに定義
}

// ----------------------------------------
// ★★★ ヘルパー関数群（スケルトン） ★★★
// ----------------------------------------

const initializeGame = (initialState: GameState): GameState => {
    // 必要な初期化処理
    return {
        ...initialState,
        isRunning: true,
        frame: 0
    };
};

const transitionScene = (currentState: GameState): GameScene => {
    // Enterキーを押した際のシーン遷移ロジック
    switch (currentState.currentScene) {
        case GameScene.Title:
            return GameScene.MainGame;
        case GameScene.MainGame:
            return GameScene.Pause;
        case GameScene.Pause:
            return GameScene.GameOver;
        case GameScene.GameOver:
            return GameScene.Title; // 終端まで行ったらTitleに戻る
        default:
            return GameScene.Title;
    }
};

const handleInput = (key: string, currentState: GameState): GameState => {
    if (key === 'Enter') {
        return {
            ...currentState,
            currentScene: transitionScene(currentState)
        };
    }
    // その他の入力はロジック本体に任せる
    return currentState;
};

const updateCoreLogic = (currentState: GameState): GameState => {
    // メインゲーム以外のシーンでは、コアロジックを更新しない
    if (currentState.currentScene !== GameScene.MainGame) {
        return currentState;
    }
    
    // MAINGAME シーン時のみフレームを更新
    const newState = {
        ...currentState,
        frame: currentState.frame + 1
    };
    return newState;
};

const updateRenderHelpers = (currentState: GameState) => {
    // 実際の描画・アニメーション更新処理（ダミー）
};


// ----------------------------------------
// ★★★ メインコンポーネント ★★★
// ----------------------------------------

export default function GameCore() {
    // シーンに依存しない状態（frame, isRunning）を useRef で管理
    const gameStateRef = useRef<Omit<GameState, 'currentScene'>>({ frame: 0, isRunning: false });
    
    // シーンの状態を useState で管理 (画面更新のため)
    const [currentScene, setCurrentScene] = useState(GameScene.Title); 
    const [displayFrameCount, setDisplayFrameCount] = useState(gameStateRef.current.frame); 

    // 現在の完全な GameState を返すヘルパー関数 (useCallbackでメモ化)
    const getFullGameState = useCallback((): GameState => ({
        ...gameStateRef.current,
        currentScene: currentScene
    }), [currentScene]);


    // 1. キーイベントリスナーのハンドラ
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        const newGameState = handleInput(event.key, getFullGameState());
        
        // シーンが変化した場合、useStateを更新する
        if (newGameState.currentScene !== getFullGameState().currentScene) {
            setCurrentScene(newGameState.currentScene);
        }
        
        // フレームや isRunning などの状態を useRef に書き戻す
        gameStateRef.current.frame = newGameState.frame;
        gameStateRef.current.isRunning = newGameState.isRunning;

    }, [getFullGameState]);

    // 2. 初期化とイベントリスナーの設定/クリーンアップ
    useEffect(() => {
        // 初期化処理
        gameStateRef.current = initializeGame(getFullGameState());
        
        // キーイベントリスナーを追加
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            // クリーンアップでリスナーを削除
            window.removeEventListener('keydown', handleKeyDown);
            console.log("[CLEANUP] Game session ended.");
        };
    }, [handleKeyDown]);


    // 3. メインループの実行
    useEffect(() => {
        if (!gameStateRef.current.isRunning) return;

        const intervalId = setInterval(() => {
            
            // コアロジックの更新
            const newFullState = updateCoreLogic(getFullGameState()); 
            
            // ★★★ 修正箇所: currentScene以外のプロパティを ref に手動で書き戻す ★★★
            gameStateRef.current.frame = newFullState.frame;
            gameStateRef.current.isRunning = newFullState.isRunning;

            // レンダー関連の更新ヘルパー
            updateRenderHelpers(newFullState);
            
            // 表示用のStateを更新
            setDisplayFrameCount(newFullState.frame);

        }, FRAME_INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, [getFullGameState]); 


    // 4. シーンコンポーネントのレンダリング
    const renderScene = () => {
        switch (currentScene) {
            case GameScene.Title:
                return <TitleScene />;
                
            case GameScene.MainGame:
                // MainGameScene と情報表示を重ねて表示
                return (
                    <>
                        <MainGameScene />
                        <div className={game_styles.infoBlock}>
                            <p className={game_styles.statusText}>
                                **=== メインループ稼働中 (60 FPS) ===**
                            </p>
                            <p className={game_styles.frameCount}>
                                FRAME COUNT: {displayFrameCount}
                            </p>
                            <p className={game_styles.updateInfo}>
                                (約16.67ミリ秒ごとに State が更新されます)
                            </p>
                        </div>
                    </>
                );
            case GameScene.Pause:
                return <PauseScene />;
                
            case GameScene.GameOver:
                return <GameOverScene />;
                
            default:
                return null;
        }
    }
    
    return (
        <div className={game_styles.gameContainer}> 
            {renderScene()}
        </div>
    );
}