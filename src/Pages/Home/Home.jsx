import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonContact from '../../Components/Button/ButtonContact';
import me from '../../Assets/me-no-bkg-simple.png'
import NavBar from '../../Components/Navigationbar/Navbar'

// import cutom css
import './Home.css'; 

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" >
        <NavBar />
      <div className='Home_content'>
                <div className='content_left'>
                    <div className='left_content'>
                    <p>I'm <span>TCHALIM Sam Tanguy</span></p>
                    <p><span>REACT</span> DEVELOPER &</p>
                    <p><span>MARKETING</span> PROFESSIONAL</p>
                    </div>

                    <div className='content_left_bottom'>
                        <ButtonContact />
                    </div>
                </div>

                <div className='content_right'>
                    <div className='meImage'>
                        <img src={me} alt="" srcset="" />
                    </div>
                </div>
            </div>
      </Container>
    </React.Fragment>
  );
}