import { createContext, useState } from "react";

const CartContext = createContext();


export function CartProvider({ children }) {

    const [cart, setCart] = useState([
        {name: 'T-shirt', price: '10', quantity: 1}
    ]);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    
    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartContext;
