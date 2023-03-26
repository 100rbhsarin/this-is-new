import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
   
<div className='cards'>
       
       <div className='cards__container'>
       
         <div className='cards__wrapper'>
          
          <ul className='cards__items'>
          <h1>Collections</h1>
            <CardItem
             src='image/t1.jpg'
             text='Polished glazed vitrified tiles'
            //  label='Polished glazed vitrified tiles'
             path='/products'
            />
            <CardItem
               src='image/t2.jpg'
               text='Glazed vitrified tiles'
              //  label='Glazed vitrified tiles'
               path='/products'
            />
            <CardItem
              src='image/t4.jpg'
              text='I glaze vitrified tile'
              // label='I glaze vitrified tile'
              path='/products'
            />
          </ul>
        
          
        </div>
      </div>
    </div>

  )
}

export default Cards;

