import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import dogVid from '../video/dogvid.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={dogVid} autoPlay loop muted />
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