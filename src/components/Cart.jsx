import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../contexts/CartContext'
import CartItem from './CartItem';

export default function Cart() {

    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart-wrapper">
            
            <div className='cart-list'>
            {cart.map(item => (
                <div className='cart-item'>
                    <CartItem item={item}></CartItem>
                    <button onClick={removeFromCart}>X</button>
                </div>
            ))}
            </div>
        </div>
    )
}

