import React from 'react'
import { createContext, useState } from 'react'

import cap from '../img/cap.svg'

const ProductsContext = createContext()

export function ProductsProvider ({ children }) {

    const [products, setProducts] = useState([{name: 'cap', price: '10', img: cap }])
    
    const [cart, setCart] = useState([
        {name: 'T-shirt', price: '10', quantity: 1}
    ]);
    

  return (
    <ProductsContext.Provider value = {products}>
        {children}
    </ProductsContext.Provider>
  )
}
export default ProductsContext;
