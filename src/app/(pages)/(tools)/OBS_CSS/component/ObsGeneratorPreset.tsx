import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Propsの型を定義
interface ObsGeneratorPresetProps {
  path: string; // Stateツリー内のパス ('preset')
  setSetting: (path: string, value: string) => void; // 親の汎用Setter関数
  currentValue: string; // 現在のStateの値
}

export default function ObsGeneratorPreset({ path, setSetting, currentValue }: ObsGeneratorPresetProps) {
  
  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    
    // 親の汎用Setter関数を呼び出し、Stateツリーを更新
    setSetting(path, newValue);
  };

  const MenuProps = {
    disableScrollLock: true,
  };

  // サポートするプリセットのリスト
  const presets = [
    { label: 'None', value: 'none' }, 
    { label: 'Default', value: 'default' },
    // 将来的に追加される可能性のあるプリセット:
    // { label: 'Minimal', value: 'minimal' }, 
    // { label: 'Streamer A Style', value: 'streamerA' },
  ];

  return (
    <Box sx={{ minWidth: 275 }}>
      <FormControl fullWidth>
        <InputLabel id="preset-select-label">Preset</InputLabel>
        <Select
          labelId="preset-select-label"
          id="preset-select"
          
          // Stateの値として currentValue を使用
          value={currentValue}
          
          label="Preset"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {presets.map((preset) => (
            <MenuItem key={preset.value} value={preset.value}>
              {preset.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}