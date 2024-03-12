import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards">
      <h1 className='' id='run2022'>Marathons aren't just about running.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <p className='mb-5 text-center h1'>2022</p>
          <ul className='cards__items'>
            <CardItem
              src='images/run1.png'
              text='First Official Half Marathon - June 2022'
              label='Crazy Run'
              path='#'
            />
            <CardItem
              src='images/run2.png'
              text='First Marathon - October 2022'
              label='Crazy Run'
              path='#'
            />
          </ul>
          <ul>

          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='images/run3.png'
              text=' The story of the Exeter Marathon - May 2023'
              label='Crazy Run'
              path='#'
            />
            <CardItem
              src='images/run4.png'
              text='Eden Marathon - October 2023'
              label='Crazy Run'
              path='#'
            />
          </ul>

          <p className='m-5 text-center h1' id='run2024'>2024</p>
          <ul className='cards__items'>
            <CardItem
              src='images/logo.png'
              text='coming soon...'
              label='Crazy Run'
              path='#'
            />
            <CardItem
              src='images/logo.png'
              text='coming soon...'
              label='Crazy Run'
              path='#'
            />
            <CardItem
              src='images/logo2.png'
              text='October 2024'
              label='Crazy Run'
              path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
