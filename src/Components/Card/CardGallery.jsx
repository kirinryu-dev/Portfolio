import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import ModalGallery from '../ModalGallery/ModalGallery'; 


// import custom css 

import './CardGallery.css'

const cardData = [
  {
    project: "Task Manager",
    type: "add , edit , delete task as complet",
    feature: "Filter tasks by status , notification for task deadlines",
    modalContent: 'Hello world ',
    modalLink: 'Https://'
  },
  {
    project: "E-commerce Store",
    type: "Product listing , product details shopping cart",
    feature: "Checkout process user authentication push notification for promootion",
    modalContent: 'wtFFFF',
    modalLink: 'https://'
  },
  {
    project: "Social Media ",
    type: "Post scheduling , analytics display ",
    feature: "Multiple account management , real time notifications",
    modalContent: '',
    modalLink: 'https://'
  },
  {
    project: "Weather App",
    type: "Current weather , forecast , search by city ",
    feature: "Push notification and alerts favourite location ",
    modalContent: '',
    modalLink: 'https://'
  },
  {
    project: "Recipe App",
    type: "Recipe Search , ingredients filter",
    feature: "User-generated content , step by step coocking instruction",
    modalContent: 'zabuza momochi',
    modalLink: 'https://'
  },
  {
    project: "Chat Application",
    type: "Chat",
    feature: "Real-time messaging , group chat , notificaton for group message",
    modalContent: '',
    modalLink: 'https://'
  }
];


const CardList = () => {
  return (
    <div className="card-container Card">
      {cardData.map((card, index) => (
        <Card sx={{ minWidth: 275 }} className='Card' key={index}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <span>Project</span>
            </Typography>
            <Typography variant="h5" component="div">
              {card.project}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {card.type}
            </Typography>
            <Typography variant="body2">
              {card.feature}
              <br />
              {card.example}
            </Typography>
          </CardContent>
          <CardActions>
            <ModalGallery content={card.modalContent} link={card.modalLink} />
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CardList;