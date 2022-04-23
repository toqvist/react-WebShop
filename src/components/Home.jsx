import React from 'react'
import { useState, useContext } from 'react'
import ProductsContext from '../contexts/ProductsContext';
import Product from './Product';

export default function Home() {

  const products = useContext(ProductsContext);

  return (
    <div>Home
      
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
