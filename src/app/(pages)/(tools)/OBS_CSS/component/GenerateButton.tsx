import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function GenerateButton({ handleGenerate }: any) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => handleGenerate && handleGenerate()}>
        生成
      </Button>
    </Stack>
  );
}