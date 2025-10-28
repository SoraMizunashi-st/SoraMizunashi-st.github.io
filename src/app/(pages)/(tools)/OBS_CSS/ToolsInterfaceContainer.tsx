
import React, { useState, useCallback } from 'react';
import ToolsInterfaceMDX from './ToolsInterface'; // MDXファイルをインポート

import { GeneratorSettings , initialSettings} from "./types/generator.type"

import PresetList from "./component/ObsGeneratorPreset"
import FontList from "../../../../component/ui/FontList"
import FontSizeSlider from "./component/FontSizeSlider"
import IconFrameShapeList from "./component/IconFrameShapeList"
import IconSizeSlider from "./component/IconSizeSlider"
import OnOffSwitch from "./component/OnOffSwitch"

import SuperChatAnimationList from "./component/SuperChatAnimationList"
import MemberShipAnimationList from "./component/MembershipAnimationList"
import ColorPicker from "../../../../component/ui/ColorPicker"
import GenerateButton from "./component/GenerateButton"

export default function ToolsInterfaceContainer() {
  const [settings, setSettings] = useState<GeneratorSettings>(initialSettings);

  // Stateを更新するための汎用Setter関数 (ネストされたプロパティも更新可能)
  // 例: setSetting('basicStyle.fontSize', 40)
  const setSetting = useCallback((path: string, value: any) => {
    setSettings(prevSettings => {
      const newSettings = JSON.parse(JSON.stringify(prevSettings));
      const keys = path.split('.');
      let current = newSettings as any;
      
      // パスを辿り、最終的なキーに値を設定
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      
      return newSettings;
    });
  }, []);

  // ColorPickerとOnOffSwitch用のカスタムコンポーネント関数
  const CustomOnOffSwitch = useCallback((path: string) => (props: any) => 
    <OnOffSwitch 
        {...props} 
        path={path} 
        setSetting={setSetting} 
        // pathに基づいて現在の値を動的に取得
        currentValue={path.split('.').reduce((o, k) => (o as any)[k], settings as any)} 
    />, [settings, setSetting]);

  const CustomColorPicker = useCallback((path: string) => (props: any) => 
    <ColorPicker 
        {...props} 
        path={path} 
        setSetting={setSetting} 
        // pathに基づいて現在の値を動的に取得
        currentValue={path.split('.').reduce((o, k) => (o as any)[k], settings as any)} 
    />, [settings, setSetting]);

  // 将来のCSS生成ロジックのプレースホルダー
  const handleGenerate = () => {
    console.log("Generating CSS with settings:", settings);
    // TODO: ここにsettingsからCSSを生成するロジックを実装する
  };

  // MDXコンポーネントにPropsとしてStateとSetter関数を渡す
  return (
    <ToolsInterfaceMDX 
        settings={settings}
        setSetting={setSetting}
        handleGenerate={handleGenerate}
        
        // 1. シンプルなコンポーネントは、Propsとしてセッターと現在の値を直接渡す
        PresetList={(props: any) => <PresetList {...props} setSetting={setSetting} currentValue={settings.preset} />}
        FontList={(props: any) => <FontList {...props} setSetting={setSetting} currentValue={settings.basicStyle.fontFamily} />}
        FontSizeSlider={(props: any) => <FontSizeSlider {...props} setSetting={setSetting} currentValue={settings.basicStyle.fontSize} />}
        IconFrameShapeList={(props: any) => <IconFrameShapeList {...props} setSetting={setSetting} currentValue={settings.icon.frameShape} />}
        IconSizeSlider={(props: any) => <IconSizeSlider {...props} setSetting={setSetting} currentValue={settings.icon.size} />}
        SuperChatAnimationList={(props: any) => <SuperChatAnimationList {...props} setSetting={setSetting} currentValue={settings.paidContent.superChatAnimation} />}
        MemberShipAnimationList={(props: any) => <MemberShipAnimationList {...props} setSetting={setSetting} currentValue={settings.paidContent.memberShipAnimation} />}
        
        // 2. 複雑なコンポーネントは、pathを受け取る関数そのものを渡し、
        //    MDX側で CustomOnOffSwitch("path")() のように呼び出す
        OnOffSwitch={CustomOnOffSwitch}
        ColorPicker={CustomColorPicker}

        // 3. GenerateButtonはロジックのみを渡す
        GenerateButton={(props: any) => <GenerateButton {...props} handleGenerate={handleGenerate} />}
    />
  );
}