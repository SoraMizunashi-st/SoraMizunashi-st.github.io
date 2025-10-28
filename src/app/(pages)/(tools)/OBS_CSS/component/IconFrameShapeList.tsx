import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Propsの型を定義
interface IconFrameShapeListProps {
  path: string; // Stateツリー内のパス ('icon.frameShape')
  setSetting: (path: string, value: string) => void; // 親の汎用Setter関数
  currentValue: string; // 現在のStateの値
}

export default function IconFrameShapeList({ path, setSetting, currentValue }: IconFrameShapeListProps) {
  
  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    
    // 1. 親の汎用Setter関数を呼び出し、Stateツリーを更新
    setSetting(path, newValue);
  };

  const MenuProps = {
    disableScrollLock: true,
  };

  // 形状オプションのリスト（CSSで使いやすい文字列値を使用）
  const shapes = [
    { label: '丸', value: 'circle' },
    { label: '四角(角90度)', value: 'square' },
    { label: '四角(角円形)', value: 'rounded' },
  ];

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="icon-shape-select-label">アイコン形状</InputLabel>
        <Select
          labelId="icon-shape-select-label"
          id="icon-shape-select"
          
          // 2. Stateの値として currentValue を使用
          value={currentValue}
          
          label="アイコン形状"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {shapes.map((shape) => (
            <MenuItem key={shape.value} value={shape.value}>
              {shape.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}