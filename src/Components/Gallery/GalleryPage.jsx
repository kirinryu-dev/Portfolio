import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Cardgallery from '../Card/CardGallery'


// import custom css 

import './GalleryPage.css';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div className='Project_card'>
          <div>
            <Cardgallery />
          </div>

          <div>
            <Cardgallery />
          </div>

          <div>
            <Cardgallery />
          </div>


        </div>

        <div className='Project_card'>
          <div>
            <Cardgallery />
          </div>

          <div>
            <Cardgallery />
          </div>

          <div>
            <Cardgallery />
          </div>


        </div>

        <div className='Project_card'>
          <div>
            <Cardgallery />
          </div>

          <div>
            <Cardgallery />
          </div>

          <div>
            <Cardgallery />
          </div>


        </div>
        
      </Container>
    </React.Fragment>
  );
}