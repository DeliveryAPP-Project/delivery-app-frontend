import { createContext, useContext, useEffect, useState } from 'react';
import { useModal } from './ModalContext';

export type ICartContext = {
	cart: ICart;
	handleAddProductToCart: (
		product: ICartItem,
		restaurantPhoneNumber: string
	) => void;
	handleRemoveProductFromCart: (productId: number) => void;
	handleIncrementProduct: (productId: number) => void;
	handleDecrementProduct: (productId: number) => void;
};

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<ICart>({} as ICart);
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

	function handleAddProductToCart(
		product: ICartItem,
		restaurantPhoneNumber: string
	) {
		const updatedProducts: ICartItem[] = cart?.products || [];

		if (!cart?.products || cart.products.length === 0) {
			updatedProducts.push(product);
		} else {
			cart.products.map((item) => {
				if (item.restaurant_id !== product.restaurant_id) {
					handleType('information');
					handleOpen();
					return;
				} else {
					updatedProducts.push(product);
				}
			});
		}

		const updatedCart: ICart = {
			products: updatedProducts,
			restaurantPhoneNumber,
			numberProducts: updatedProducts.length
		};

		setCart(updatedCart);
	}

	function handleRemoveProductFromCart(productId: number) {
		const filteredCart = cart.products.filter((item) => item.id !== productId);
		const updatedCart: ICart = {
			products: filteredCart,
			restaurantPhoneNumber: filteredCart.length === 0 ? '' : cart.restaurantPhoneNumber,
			numberProducts: filteredCart.length
		};

		setCart(updatedCart);
	}

	function handleIncrementProduct(productId: number) {
		const updatedProduct: ICartItem[] = [];

		cart?.products.map((item) => {
			if (item.id === productId) {
				item.quantity++;
			}
			updatedProduct.push(item);
		});

		const updatedCart: ICart = {
			products: updatedProduct,
			restaurantPhoneNumber: cart.restaurantPhoneNumber,
			numberProducts: updatedProduct.length
		};

		setCart(updatedCart);
	}

	function handleDecrementProduct(productId: number) {
		const updatedProduct: ICartItem[] = [];

		cart.products.map((item) => {
			if (item.id === productId && item.quantity > 1) {
				item.quantity--;
			}
			updatedProduct.push(item);
		});

		const updatedCart: ICart = {
			products: updatedProduct,
			restaurantPhoneNumber: cart.restaurantPhoneNumber,
			numberProducts: updatedProduct.length
		};

		setCart(updatedCart);
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				handleAddProductToCart,
				handleRemoveProductFromCart,
				handleIncrementProduct,
				handleDecrementProduct,
			}}
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
