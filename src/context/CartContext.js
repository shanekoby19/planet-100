import { createContext, useState } from "react";
import { useAnimation } from 'framer-motion';

const CartContext = createContext({
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const cartAnimationControl = useAnimation();

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            cartAnimationControl
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;