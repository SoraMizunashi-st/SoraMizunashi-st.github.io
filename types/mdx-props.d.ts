import * as React from 'react';
import { GeneratorSettings } from '../src/app/(pages)/(tools)/OBS_CSS/types/generator.type'; 

// -----------------------------------------------------------
// 1. ToolsInterfaceMDX コンポーネントが受け取るProps全体の型定義
// -----------------------------------------------------------
export type ToolsInterfaceMDXProps = {
    // StateとSetter
    settings: GeneratorSettings;
    setSetting: (path: string, value: any) => void;
    handleGenerate: () => void;
    
    // 単一Propsバインドコンポーネントの型
    // Container側では setSetting/currentValue がバインドされているため、
    // MDX側で path 以外の Props は受け取らない（anyでOK）。
    PresetList: (props: { path: string }) => React.ReactElement;
    FontList: (props: { path: string }) => React.ReactElement;
    FontSizeSlider: (props: { path: string }) => React.ReactElement;
    IconFrameShapeList: (props: { path: string }) => React.ReactElement;
    IconSizeSlider: (props: { path: string }) => React.ReactElement;
    SuperChatAnimationList: (props: { path: string }) => React.ReactElement;
    MemberShipAnimationList: (props: { path: string }) => React.ReactElement;

    // HOC（高階コンポーネント）の型
    // MDX側で `Component("path")({})` の形式で呼び出される
    OnOffSwitch: (path: string) => (props: any) => React.ReactElement;
    ColorPicker: (path: string) => (props: any) => React.ReactElement;

    // GenerateButtonは handleGenerateのみを持つ
    GenerateButton: (props: { handleGenerate: () => void }) => React.ReactElement;
};

// -----------------------------------------------------------
// 2. モジュール拡張：ToolsInterface.mdxにProps型を適用
// -----------------------------------------------------------
declare module '../src/app/(pages)/(tools)/OBS_CSS/ToolsInterface.mdx' { 
    // Container.tsx のインポートパスと一致させる
    const Component: React.FC<ToolsInterfaceMDXProps>;
    export default Component;
}