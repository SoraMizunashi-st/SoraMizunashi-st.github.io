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
  // Preset values commonly used for icons in OBS/chat overlays
  const ICON_PRESETS = [24, 32, 40, 56, 72];

  // Sliderの値が変更されたときに呼び出されるハンドラ
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setSetting(path, newValue);
    }
  };

  const initial = typeof currentValue === 'number' ? currentValue : ICON_PRESETS[2];

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={typeof currentValue === 'number' ? currentValue : initial}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={null}
        marks={ICON_PRESETS.map((v) => ({ value: v, label: String(v) }))}
        min={ICON_PRESETS[0]}
        max={ICON_PRESETS[ICON_PRESETS.length - 1]}
      />
    </Box>
  );
}