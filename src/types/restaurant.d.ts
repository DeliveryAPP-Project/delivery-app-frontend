declare type IRestaurant = {
	id: number;
	name: string;
	description: string;
	classification: number;
	location: string;
	url_image_logo: string;
	url_image_banner: string;
	associated_products: IFood[];
	telephone: string;
};
