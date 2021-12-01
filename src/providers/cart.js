import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (item, index) => {
        const newCart = cart.filter(
            (item, itemIndex) => itemIndex !== index
        );
        setCart(newCart);
    };
    
    return (
        <CartContext.Provider
            value = {{ cart, addToCart, removeFromCart }}>
                {children}
            </CartContext.Provider>
    )
};