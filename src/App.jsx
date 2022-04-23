import './App.css'
import { useState, useContext } from 'react'
import { CartProvider } from './contexts/CartContext'
import { ProductsProvider } from './contexts/ProductsContext'
import Home from './components/Home'
import Cart from './components/Cart'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <CartProvider>
      <ProductsProvider>
        <div className="App">
          <Router>
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Router>
        </div>
      </ProductsProvider>
    </CartProvider>
  )
}

export default App
