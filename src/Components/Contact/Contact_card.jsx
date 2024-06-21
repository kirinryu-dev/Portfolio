import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import mePhoto from '../../Assets/me-no-bkg-simple.png';
// import Bread from '../Bread/Bread'

// Import custom CSS
import './Contact_card.css';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={mePhoto}
          alt="Tchalim Sam Tanguy"
          className='me'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span className='contact_card_me'>
              <p>Tchalim Sam Tanguy</p>
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You can use any of these methods, I'll get back to you as soon as possible.
          </Typography>
        </CardContent>
      </CardActionArea>
      <div>
        {/* <Bread /> */}
      </div>
    </Card>
  );
}
