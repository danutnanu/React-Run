import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>Marathons aren't just about running.</h1>
            <h1>They're about pushing your limits.</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;