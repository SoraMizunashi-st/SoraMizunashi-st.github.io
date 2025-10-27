import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function MembershipAnimationList() {
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
        <InputLabel id="membership-animation-select-label">MembershipAnimation</InputLabel>
        <Select
          labelId="membership-animation-select-label"
          id="smembership-animation-select"
          value={value}
          label="MembershipAnimation"
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