import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Cute Pets!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dog1.jpg'
              text='Meet Lucky, a 9-month-old Female Golden Retriever looking for her new home!'
              label='Golden Retriever'
              path='/form'
              
            />
            <CardItem
              src='images/dog2.jpg'
              text='Meet Oscar, a 4-year-old Male Chihuahua looking for his new home!'
              label='Chihuahua'
              path='/form'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dog3.avif'
              text='Meet Sam, a super sweet 2-year-old Female Pitbull looking for her new home!'
              label='Pitbull'
              path='/form'
            />
            <CardItem
              src='images/dog4.jpg'
              text='Meet Paul, a 11-month-old Male Poodle looking for his new home!'
              label='Poodle'
              path='/form'
            />
            <CardItem
              src='images/dog5.jpg'
              text='Meet Smiley, a 3-year-old Male Pitbull looking for his new home!'
              label='Pitbull'
              path='/form'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;