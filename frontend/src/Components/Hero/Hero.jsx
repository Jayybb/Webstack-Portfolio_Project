import React from 'react';
import './Hero.css';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import hand_icon from '../Assets/hand_icon.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Brand New Arrivals Only</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt='Hand icon' />
          </div>
          <p>Collections</p>
          <p>For everybody</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collections</div>
          <img src={arrow} alt='Arrow' />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt='Hero' />
      </div>
    </div>
  );
};

export default Hero;