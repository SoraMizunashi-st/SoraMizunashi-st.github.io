import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// Propsの型を定義
interface IconSizeSliderProps {
  path: string; // Stateツリー内のパス ('icon.size')
  setSetting: (path: string, value: number) => void; // 親の汎用Setter関数
  currentValue: number; // 現在のStateの値 (number)
}

export default function IconSizeSlider({ path, setSetting, currentValue }: IconSizeSliderProps) {
  
  // Sliderの値が変更されたときに呼び出されるハンドラ
  const handleChange = (event: Event, newValue: number | number[]) => {
    // newValue は Slider の値 (ここでは単一の数値として扱う)
    if (typeof newValue === 'number') {
      // 親の汎用Setter関数を呼び出し、Stateツリーを更新
      setSetting(path, newValue);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        // 1. 現在の値として currentValue を使用
        value={currentValue}
        
        // 2. 変更イベントで handleChange を呼び出す
        onChange={handleChange}
        
        valueLabelDisplay="auto"
        step={1}
        marks
        min={12}
        max={60}
      />
    </Box>
  );
}