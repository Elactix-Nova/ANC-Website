import React from 'react'
import mealsImage from "../../assets/meals.jpg"
import logoImage from "../../assets/logo.png"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
import { Parallax } from 'react-scroll-parallax';

const Header = (props) => {
  return (
    <>  
        <div className={classes.headerdiv}>
        <header className={classes.header}>
            <h1>All Night Canteen</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        </div>
        <Parallax translateY={[-50, 50]}>
        <div className={classes['main-image']}>
        </div>
        </Parallax>
    </>
  )
}

export default Header