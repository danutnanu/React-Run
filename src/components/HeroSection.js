import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container w-100 border border-danger d-flex p-2'>
      <video src="./videos/video1.mp4" autoPlay loop muted className='w-100 h-100 position-fixed' />
      <div className='hero-first m-5 border border-warning'>
        <p className='h3'>Developed by: Danut Nanu</p>
        <p className='h3'>Designed by: Danut Nanu</p>
        <p className='h3'>Runner: Danut Nanu</p>
      </div>

      <div className='hero-second text-center  m-5 border border-warning'>
        <h1 className='text-warning h1 '>"EVERYTHING</h1>
        <p className='h1'>YOU WANTED TO KNOW ABOUT YOURSELF</p>
        <p className='h2'>YOU CAN LEARN IN</p>
        <p className='text-warning h1'>26.2 MILES"</p>
      </div>
    </div>
  );
}

export default HeroSection;
