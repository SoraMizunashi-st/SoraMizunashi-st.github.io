import * as React from 'react';
import Switch from '@mui/material/Switch';

// Propsの型を定義
interface OnOffSwitchProps {
  path: string; // Stateツリー内のパス
  setSetting: (path: string, value: boolean) => void; // 親の汎用Setter関数
  currentValue: boolean; // 現在のStateの値 (boolean)
}

const label = { inputProps: { 'aria-label': 'On/Off switch' } };

export default function OnOffSwitch({ path, setSetting, currentValue }: OnOffSwitchProps) {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked; // Switchの新しい状態 (true/false)
    
    // 1. 親の汎用Setter関数を呼び出し、Stateツリーを更新
    setSetting(path, newValue);
  };

  return (
    <div>
      <Switch 
        {...label} 
        // 2. Stateの値として currentValue を使用
        checked={currentValue}
        // 3. 変更イベントで handleChange を呼び出す
        onChange={handleChange} 
      />
    </div>
  );
}