import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1 className='mb-5'>Marathons aren't just about running.</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    <p className='m-5 text-center h1'>2022</p>

                    <ul className='cards__items'>
                        <CardItem
                            src='images/logo.jpg'
                            text='First running in 13.1 miles'
                            label='Crazy Run'
                            path='/run2022'
                        />
                        <CardItem
                            src='images/run1.jpeg'
                            text='First running in 26.2 miles'
                            label='Crazy Run'
                            path='/run2022'
                        />
                    </ul>

                    <p className='mt-5 mb-5 text-center h1'>2023</p>

                    <ul className='cards__items'>
                        <CardItem
                            src='images/logo.jpg'
                            text='First running in 13.1 miles'
                            label='Crazy Run'
                            path='/run2023'
                        />
                        <CardItem
                            src='images/run1.jpeg'
                            text='First running in 26.2 miles'
                            label='Crazy Run'
                            path='/run2023'
                        />
                        <CardItem
                            src='images/run1.jpeg'
                            text='First running in 26.2 miles'
                            label='Crazy Run'
                            path='/run2023'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;