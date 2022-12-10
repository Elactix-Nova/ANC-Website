import React from 'react'
import classes from "./MealsSummary.module.css"
const MealsSummary = () => {
  return (
    <section className={classes.summary} >
        <h1>Night Time Craving Heaven </h1>
        <p>
        Have you ever felt a craving for something delicious but alas, all food joints were closed
        at night. Well worry not, cause ANC is here to satisfy that craving, all within the tight
        budget of a college student.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}

export default MealsSummary