import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Propsの型を定義
interface SuperChatAnimationListProps {
  path: string; // Stateツリー内のパス ('paidContent.superChatAnimation')
  setSetting: (path: string, value: string) => void; // 親の汎用Setter関数
  currentValue: string; // 現在のStateの値
}

export default function SuperChatAnimationList({ path, setSetting, currentValue }: SuperChatAnimationListProps) {
  // ローカルState (useState) は削除し、currentValueを使用

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    
    // 1. 親の汎用Setter関数を呼び出し、Stateツリーを更新
    setSetting(path, newValue);
  };

  const MenuProps = {
    disableScrollLock: true,
  };

  // MenuItemの値は、文字列（アニメーション名など）にすることをお勧めします。
  // (例: 'default', 'slideIn', 'fade' など)
  // 今回は一旦、元の数値（stringとして）または対応する文字列を使用します。
  const animations = [
    { label: 'Default', value: 'default' }, // '10' -> 'default' など
    { label: 'Slide-In', value: 'slideIn' }, // '20' -> 'slideIn'
    { label: 'Pulse', value: 'pulse' }, // '30' -> 'pulse'
  ];


  return (
    <Box sx={{ minWidth: 275 }}>
      <FormControl fullWidth>
        <InputLabel id="super-chat-animation-select-label">SuperChatAnimation</InputLabel>
        <Select
          labelId="super-chat-animation-select-label"
          id="super-chat-animation-select"
          
          // 2. Stateの値として currentValue を使用
          value={currentValue}
          
          label="SuperChatAnimation"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {animations.map((anim) => (
            <MenuItem key={anim.value} value={anim.value}>
              {anim.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}