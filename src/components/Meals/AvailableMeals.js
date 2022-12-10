import React, {useEffect, useState} from 'react'
import Cart from '../UI/Cart';
import classes from "./AvailableMeals.module.css"
import MealItem from './MealItem/MealItem';
const meals = [
    {
      id: 'm1',
      name: 'Masala Maggi',
      description: 'The good ol\' classic that resonates with the heart of every Indian',
      price: 40,
    },
    {
      id: 'm2',
      name: 'Fried Maggi',
      description: 'A new take on the classic, be sure to try it out!',
      price: 50,
    },
    {
      id: 'm3',
      name: 'Veg Cheese Sandwich',
      description: 'Bread with stuff in the middle, you can have it cold or grilled (stuff != non-veg)',
      price: 70,
    },
    {
      id: 'm4',
      name: 'Tandoori Paneer Sandwich',
      description: '(Veg Cheese Sandwich - Veg - Cheese + Paneer)**Tandoor',
      price: 90,
    },
    {
      id: 'm5',
      name: 'Masala Dosa',
      description: 'Another classic, the simplest dish ever (it\'s literally dal and water)',
      price: 50,
    },
    {
      id: 'm6',
      name: 'Idli Sambar',
      description: 'South Indian rice cakes served with spicy and tangy Sambar',
      price: 40,
    },
    {
      id: 'm7',
      name: 'Plain Fried Rice',
      description: 'Rice that is fried (note: gravy not included)',
      price: 60,
    },
    {
      id: 'm8',
      name: 'Chilli Garlic Rice',
      description: 'Plain Fried Rice + Garlic (if garlic in name: price+=15)',
      price: 75,
    },
    {
      id: 'm9',
      name: 'Tea',
      description: 'Milk + Tea Leaves + Sugar',
      price: 10,
    },
    {
      id: 'm10',
      name: 'Coffee',
      description: 'Milk + Coffee + Sugar',
      price: 15,
    },
  ];


const AvailableMeals = () => {

    const mealsList = meals.map(meal => 
      <MealItem 
        id={meal.id} 
        key={meal.id} 
        name={meal.name} 
        description={meal.description}  
        price={meal.price}
      />)

  return (  
    
    <section className={classes.meals}  >
        <Cart >
            <ul>
                {mealsList}
            </ul>
        </Cart>
    </section>
  )
}

export default AvailableMeals