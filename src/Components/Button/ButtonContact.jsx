import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// custom css 

import './ButtonContact.css';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button> */}
      <Button variant="outlined">Contact Me</Button>
    </Stack>
  );
}