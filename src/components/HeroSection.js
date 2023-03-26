import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/v4.mp4' autoPlay loop muted />
      
      <h1>Tiles</h1>
      <p>For Commercial and personal spaces</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        //   onClick={console.log('hey')}
        >
          WATCH TRAILER <AiOutlinePlayCircle />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;