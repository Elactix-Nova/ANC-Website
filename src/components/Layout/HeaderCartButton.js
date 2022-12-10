import React, {useContext, useEffect, useState  } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/CartContext'
import classes from "./HeaderCartButton.module.css"
const HeaderCartButton = (props) => {
  const cartCtx= useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighligted] = useState(false)
  const {items}= cartCtx

  const numberOfCartItems =items.reduce((curNum, item) =>{
    return curNum + item.amount
  },0)

  

  const buttonClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`

  useEffect(() => {
    if(cartCtx.items.length  === 0){
      return
    }
    setBtnIsHighligted(true)

    const timer = setTimeout(() => {
      setBtnIsHighligted(false)
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  },[items ])

  return (
    <button className={buttonClasses} onClick={props.onClick} >
        <span className={classes.icon} >
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge} > {numberOfCartItems} </span>
    </button>
  )
}

export default HeaderCartButton