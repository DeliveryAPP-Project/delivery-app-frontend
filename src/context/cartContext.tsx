import { createContext, useContext, useEffect, useState } from 'react';
import { useModal } from './ModalContext';

export type ICartItem = {
	product: IFood;
	quantity: number;
};

export type ICartContext = {
	cart: ICartItem[];
	handleAddProductToCart: (product: ICartItem) => void;
	handleRemoveProductFromCart: (productId: number) => void;
};

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<ICartItem[]>([]);
	const { handleOpen, handleType } = useModal();

	useEffect(() => {
		const storedCart = localStorage.getItem(JSON.stringify(cart));
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	function handleAddProductToCart(product: ICartItem) {
		if (cart.length === 0) {
			setCart([...cart, product]);
		} else {
			cart.forEach((item) => {
				if (item.product.restaurant_id !== product.product.restaurant_id) {
					handleType('information');
					handleOpen();

					return;
				} else {
					setCart([...cart, product]);
				}
			});
		}
	}

	function handleRemoveProductFromCart(productId: number) {
		const filteredCart = cart.filter((item) => item.product.id !== productId);

		setCart(filteredCart);
	}

	return (
		<CartContext.Provider
			value={{ cart, handleAddProductToCart, handleRemoveProductFromCart }}
		>
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
