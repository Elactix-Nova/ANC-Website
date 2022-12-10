import React,{useContext, useState} from 'react'
import Modal from '../UI/Modal'
import classes from "./Cart.module.css"
import CartContext from "../../store/CartContext"
import CartItem from "./CartItem"
const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const totalAmount = '₹'+`${cartCtx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount:1 })
    }

    const cartItems = <ul className={classes['cart-items']} >
         {cartCtx.items.map(item => 
            <CartItem  
                key={item.id} 
                name={item.name} 
                price={item.price}  
                amount={item.amount} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                onAdd={cartItemAddHandler.bind(null, item)} />
            )}
        </ul>


    const cartModalContent = <React.Fragment>
         {cartItems}
        <div className={classes.total} >
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        </React.Fragment>

  return (
    <Modal onClose={props.onClose} >
       {cartModalContent}
    </Modal>
  )
}

export default Cart