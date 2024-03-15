import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="./videos/video1.mp4" autoPlay loop muted />
      <div className='hero-first mt-5'>
        <p className='h3'>Developed by: Danut Nanu</p>
        <p className='h3'>Designed by: Danut Nanu</p>
        <p className='h3'>Runner: Danut Nanu</p>
      </div>

      <div className='hero-second text-center m-5'>
        <h1 className='text-warning h1'>"EVERYTHING</h1>
        <p className='h1'>YOU WANTED TO KNOW</p>
        <p className='h4'>ABOUT YOURSELF YOU CAN LEARN IN</p>
        <p className='text-warning h1'>26.2 MILES"</p>
      </div>
    </div>
  );
}

export default HeroSection;
