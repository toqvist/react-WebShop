import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../contexts/CartContext'
import ProductsContext from '../contexts/ProductsContext';

export default function Product({product}) {

    const {addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <img src="" alt="" />
            <button onClick={addToCart}>buy</button>

        </div>
    )
}
