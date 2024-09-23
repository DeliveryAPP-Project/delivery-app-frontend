declare type ICartItem = IFood & {
	quantity: number;
};

declare type ICart = {
	products: ICartItem[];
	restaurantPhoneNumber: string;
	numberProducts: number;
};
