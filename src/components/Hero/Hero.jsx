import React from 'react';
import './Hero.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New Arrivals Only</h2>
        <div className='hero-hand-icon'>
          <p>new</p>
          <img src={hand_icon} alt="Hand icon indicating new arrivals" />
        </div>
        <p className='collections'>Collections</p>
        <p className='everyone'>for everyone</p>
      </div>
      <div className='hero-latest-btn'>
        <div className='btn-content'>
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="Arrow icon" />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};
