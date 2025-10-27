import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SuperChatAnimationList() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  const MenuProps = {
    disableScrollLock: true,
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <FormControl fullWidth>
        <InputLabel id="super-chat-animation-select-label">SuperChatAnimation</InputLabel>
        <Select
          labelId="super-chat-animation-select-label"
          id="super-chat-animation-select"
          value={value}
          label="SuperChatAnimation"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          <MenuItem value={10}>Default</MenuItem>
          <MenuItem value={20}>test</MenuItem>
          <MenuItem value={30}>test2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}