import React from 'react';
import './AvailableMeals.css';

import { DUMMY_MEALS } from './../../utils/dummyMeals';
import Card from './../UI/Card/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className='meals'>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
