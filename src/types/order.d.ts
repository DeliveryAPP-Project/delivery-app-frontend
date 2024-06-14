declare type IOrder = {
	client_name: string;
	client_cellphone: string;
	client_address: string;
	client_address_number: string;
	client_address_complement?: string;
	client_address_neighborhood: string;
	client_zip_code: string;
	restaurant_id: number;
	products: { product_id: number; quantity: number }[];
};
