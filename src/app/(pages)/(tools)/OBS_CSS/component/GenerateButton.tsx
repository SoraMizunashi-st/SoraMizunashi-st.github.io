import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function GenerateButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">生成</Button>
    </Stack>
  );
}