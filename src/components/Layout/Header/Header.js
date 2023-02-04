import React from 'react';

import mealsImage from '../../../assets/meals.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='Food yay!' />
      </div>
    </>
  );
};

export default Header;
