import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function IconFrameShapeList() {
  const [shape, setShape] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setShape(event.target.value as string);
  };

  const MenuProps = {
    disableScrollLock: true,
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="icon-shape-select-label">アイコン形状</InputLabel>
        <Select
          labelId="icon-shape-select-label"
          id="icon-shape-select"
          value={shape}
          label="アイコン形状"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          <MenuItem value={10}>丸</MenuItem>
          <MenuItem value={20}>四角(角90度)</MenuItem>
          <MenuItem value={30}>四角(角円形)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}