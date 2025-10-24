// ------------------------------------------------------------------------------------------------------------------------
// Dont's touch | rules , it's magic.
// ------------------------------------------------------------------------------------------------------------------------
"use client";

// ------------------------------------------------------------------------------------------------------------------------
// standard Libs Import
// ------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------------------
// Custom Import
// ------------------------------------------------------------------------------------------------------------------------
import game_styles from './GameCore.module.css';

// ------------------------------------------------------------------------------------------------------------------------
// React Import
// ------------------------------------------------------------------------------------------------------------------------
import React, { useState, useEffect, useRef, useCallback } from 'react';

// ------------------------------------------------------------------------------------------------------------------------
// Pixi.js Import
// ------------------------------------------------------------------------------------------------------------------------
import * as PIXI from 'pixi.js';

// ------------------------------------------------------------------------------------------------------------------------
// Dummy Component
// ------------------------------------------------------------------------------------------------------------------------

interface SceneProps {
    // Dummy Transition Accessor ( optional )
    onNext?: () => void;
    onResume?: () => void;
    onRestart?: () => void;
}

// ------------------------------------------------------------------------------------------------------------------------
// Any Sence
// ------------------------------------------------------------------------------------------------------------------------
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

// ------------------------------------------------------------------------------------------------------------------------
// Main Logic Variables And Struct And Params
// ------------------------------------------------------------------------------------------------------------------------

const FRAME_INTERVAL_MS = 1000 / 60; // Lock Frame Rate | tmps 60FPS

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
    // Add This for Me :)
}

// ------------------------------------------------------------------------------------------------------------------------
// Any Helpers
// ------------------------------------------------------------------------------------------------------------------------
// Init() | Description omitted
// ------------------------------------------------------------------------------------------------------------------------
const initializeGame = (initialState: GameState): GameState => {
    // Write the initialization logic temporarily and then modularize it properly in the future.
    return {
        ...initialState,
        isRunning: true,
        frame: 0
    };
};

// ------------------------------------------------------------------------------------------------------------------------
// Switching Scene Transitions | Temporary implementation, just check the completeness of all scenes
// ------------------------------------------------------------------------------------------------------------------------
const transitionScene = (currentState: GameState): GameScene => {

    switch (currentState.currentScene) {
        case GameScene.Title:
            return GameScene.MainGame;
        case GameScene.MainGame:
            return GameScene.Pause;
        case GameScene.Pause:
            return GameScene.GameOver;
        case GameScene.GameOver:
            return GameScene.Title; // Loops Back to the Title
        default:
            return GameScene.Title;
    }
};

// ------------------------------------------------------------------------------------------------------------------------
// Key Event Handler
// ------------------------------------------------------------------------------------------------------------------------
// Leave all the basic handling (common parts, pausing with space, etc.) to the main body.
// Implement only the common handling here.
// ------------------------------------------------------------------------------------------------------------------------
const handleInput = (key: string, currentState: GameState): GameState => {
    if (key === 'Enter') {
        return {
            ...currentState,
            currentScene: transitionScene(currentState)
        };
    }
    return currentState;
};


// ------------------------------------------------------------------------------------------------------------------------
// MainGameLogics | so-called Core->core();
// -----------------------------------------------------------------------------------------------------------------------
const updateCoreLogic = (currentState: GameState): GameState => {
    // For now, let's avoid writing logic outside of the main part of the game.
    // We can create settings later.
    // You'll add the usage later anyway. You know it best, right?
    if (currentState.currentScene !== GameScene.MainGame) {
        return currentState;
    }
    
    // Update Any Frame | tmps
    const newState = {
        ...currentState,
        frame: currentState.frame + 1
    };
    return newState;
};

// -----------------------------------------------------------------------------------------------------------------------
// Rendering Helper
// -----------------------------------------------------------------------------------------------------------------------
// If you want to make it easier to port your game to other games, 
// it might be a good idea to design each scene as a separate component after switching, 
// so that it can be implemented separately while storing the scene linked to the GameScene index.
// -----------------------------------------------------------------------------------------------------------------------
const updateRenderHelpers = (currentState: GameState) => {
    // now in dummy
    new PIXI.Graphics().beginFill(0x880000).lineStyle(5, 0xffffff, 1).drawPolygon([0, 0, 50, 100, 150, 50, 100, 0]).endFill();
};


// -----------------------------------------------------------------------------------------------------------------------
// Game Core Component Entry | 
// -----------------------------------------------------------------------------------------------------------------------

export default function GameCore() {

    const gameStateRef = useRef<Omit<GameState, 'currentScene'>>({ frame: 0, isRunning: false });
    const [currentScene, setCurrentScene] = useState(GameScene.Title); 
    const [displayFrameCount, setDisplayFrameCount] = useState(gameStateRef.current.frame); 

    const getFullGameState = useCallback((): GameState => ({
        ...gameStateRef.current,
        currentScene: currentScene
    }), [currentScene]);


    //Key Event Handler
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        const newGameState = handleInput(event.key, getFullGameState());
        
        // if Scene Changed , set Next Scene
        if (newGameState.currentScene !== getFullGameState().currentScene) {
            setCurrentScene(newGameState.currentScene);
        }
        
        // Any var's hand over ref
        gameStateRef.current.frame = newGameState.frame;
        gameStateRef.current.isRunning = newGameState.isRunning;

    }, [getFullGameState]);

    // Initialize and Clenanup
    useEffect(() => {

        // Initialize
        gameStateRef.current = initializeGame(getFullGameState());
        
        // Add KeyEventListener
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            // Cleanup Listener
            window.removeEventListener('keydown', handleKeyDown);
            console.log("[CLEANUP] Game session ended.");
        };
    }, [handleKeyDown]);


    // Just the main loop according to your knowledge
    useEffect(() => {
        if (!gameStateRef.current.isRunning) return;

        const intervalId = setInterval(() => {
            
            //Update Core Logic
            const newFullState = updateCoreLogic(getFullGameState()); 
            
            // Rewrite with ref
            gameStateRef.current.frame = newFullState.frame;
            gameStateRef.current.isRunning = newFullState.isRunning;

            // Update Helper
            updateRenderHelpers(newFullState);
            
            // Flap state
            setDisplayFrameCount(newFullState.frame);

        }, FRAME_INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, [getFullGameState]); 


    // Rendering
    const renderScene = () => {
        switch (currentScene) {
            // ----------------------------------------------------------------------------------------------------------------
            // When you add a scene, the first thing you should check is whether you've forgotten to add these simple parts.
            // ----------------------------------------------------------------------------------------------------------------
            case GameScene.Title:
                return <TitleScene />;
                
            case GameScene.MainGame:
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
            // in future , dont forget React flag's <></> , ret is one.
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