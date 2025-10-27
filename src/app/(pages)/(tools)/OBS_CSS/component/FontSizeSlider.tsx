import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function FontSizeSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={36}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={12}
        max={60}
      />
    </Box>
  );
}