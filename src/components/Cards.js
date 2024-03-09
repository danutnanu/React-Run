import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards">
      <h1 className='mb-5'>Marathons aren't just about running.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <p className='m-5 text-center h1' id='run2022'>2022</p>
          <ul className='cards__items'>
            <CardItem
              src='images/logo.jpg'
              text='First running in 13.1 miles'
              label='Crazy Run'
              path='#'
            />
            <CardItem
              src='images/run1.jpeg'
              text='First running in 26.2 miles'
              label='Crazy Run'
              path='#'
            />
          </ul>

          <p className='mt-5 mb-5 text-center h1' id='run2023'>2023</p>
          <ul className='cards__items'>
            <CardItem
              src='images/logo.jpg'
              text='First running in 13.1 miles'
              label='Crazy Run'
              path='#'
            />
            <CardItem
              src='images/run1.jpeg'
              text='First running in 26.2 miles'
              label='Crazy Run'
              path='#'
            />
            <CardItem
              src='images/run1.jpeg'
              text='First running in 26.2 miles'
              label='Crazy Run'
              path='#'
            />
          </ul>

          <p className='m-5 text-center h1' id='run2024'>2024</p>
          <ul className='cards__items'>
            <CardItem
              src='images/logo.jpg'
              text='First running in 13.1 miles'
              label='Crazy Run'
              path='#'
            />
            <CardItem
              src='images/run1.jpeg'
              text='First running in 26.2 miles'
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