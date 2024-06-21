import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// import custom css 

import './ContainerError.css'

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className='Error_page_container'>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <div className='Error_page'>
            <h1>
                OOOps!!
            </h1>
            <p>
                Sorry , an unexpected error has occured...
            </p>
        </div>
      </Container>
    </React.Fragment>
  );
}