import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/video/dogvid.mp4' autoPlay loop muted />
      <h1>LOOKING FOR NEW PETS?</h1>
      <p>ADOPT TODAY</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;