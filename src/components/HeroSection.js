import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./videos/video-1.mp4" autoPlay loop muted />
            <h1>"EVERYTHING</h1>
            <p>YOU WANTED TO KNOW ABOUT</p>
            <p>YOURSELF YOU CAN</p>
            <p>LEARN IN</p>
            <p className='text-warning h2'>26.2 MILES"</p>
        </div>
    )
}

export default HeroSection