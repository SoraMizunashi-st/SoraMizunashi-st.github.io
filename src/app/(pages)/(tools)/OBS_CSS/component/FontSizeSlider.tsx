import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// Propsとして path, setSetting, currentValueを受け取る
export default function FontSizeSlider({ path, setSetting, currentValue }:any) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    // newValueはSliderの値
    if (typeof newValue === 'number') {
      // 親コンポーネントのsetSettingを使ってStateを更新
      setSetting(path, newValue);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={currentValue} // 初期値
        value={currentValue}      // 現在の値
        onChange={handleChange}   // 値が変更されたら親のStateを更新
        valueLabelDisplay="auto"
        step={1}
        marks
        min={12}
        max={60}
      />
    </Box>
  );
}