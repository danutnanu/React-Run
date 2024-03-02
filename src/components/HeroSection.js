import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./videos/video-1.mp4" autoPlay loop muted />
            <h1 className='text-warning'>"EVERYTHING</h1>
            <p className='text-secondary'>YOU WANTED TO KNOW ABOUT</p>
            <p className='text-secondary'>YOURSELF YOU CAN</p>
            <p className='text-secondary'>LEARN IN</p>
            <p className='text-warning h2'>26.2 MILES"</p>
        </div>
    )
}

export default HeroSection;