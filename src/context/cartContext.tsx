import { createContext, useContext, useState } from 'react';

export type ICartItem = {
    product: IFood;
    quantity: number;
}

export type ICartContext = {
    cart: ICartItem[];
    handleAddProductToCart: (product: ICartItem) => void;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<ICartItem[]>([]);

    console.log(cart)
    function handleAddProductToCart(product: ICartItem) {
        setCart([...cart, product]);
    }

    return (
        <CartContext.Provider value={{ cart, handleAddProductToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
}