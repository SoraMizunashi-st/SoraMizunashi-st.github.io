import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Option { label: string; value: string }

interface SimpleSelectProps {
  path?: string;
  setSetting?: (path: string, value: any) => void;
  currentValue?: string;
  label?: string;
  options: Option[];
}

export default function SimpleSelect({ path, setSetting, currentValue, label, options }: SimpleSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    if (typeof path === 'string' && typeof setSetting === 'function') {
      setSetting(path, newValue);
    }
  };

  const MenuProps = { disableScrollLock: true };

  return (
    <Box sx={{ minWidth: 275 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={typeof currentValue === 'string' ? currentValue : (options[0]?.value ?? '')}
          label={label}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {options.map((o) => (
            <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
