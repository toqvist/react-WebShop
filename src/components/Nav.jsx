import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function Nav() {

    const { cart } = useContext(CartContext);

    return (
        <div className='navbar'>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/cart' className='nav-item'>
                <svg xmlns="http://www.w3.org/2000/svg" width={'25px'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cart.length}
            </Link>
        </div>
    )
}
