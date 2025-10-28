import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Propsの型を定義
interface MembershipAnimationListProps {
  path: string; // Stateツリー内のパス ('paidContent.memberShipAnimation')
  setSetting: (path: string, value: string) => void; // 親の汎用Setter関数
  currentValue: string; // 現在のStateの値
}

export default function MembershipAnimationList({ path, setSetting, currentValue }: MembershipAnimationListProps) {
  
  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    
    // 1. 親の汎用Setter関数を呼び出し、Stateツリーを更新
    setSetting(path, newValue);
  };

  const MenuProps = {
    disableScrollLock: true,
  };

  // アニメーションオプションのリスト（値を文字列として定義）
  const animations = [
    { label: 'Default', value: 'default' }, 
    { label: 'Wave', value: 'wave' }, 
    { label: 'Glow', value: 'glow' }, 
  ];


  return (
    <Box sx={{ minWidth: 275 }}>
      <FormControl fullWidth>
        <InputLabel id="membership-animation-select-label">MembershipAnimation</InputLabel>
        <Select
          labelId="membership-animation-select-label"
          // 'smembership-animation-select' -> 'membership-animation-select' に修正
          id="membership-animation-select" 
          
          // 2. Stateの値として currentValue を使用
          value={currentValue}
          
          label="MembershipAnimation"
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