import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import * as styled from './Restaurant.styles';

import ImageBall from '../../components/ImageBall';
import FoodCard from '../../components/FoodCard';

import { api } from '../../service/api';

import image from '../../assets/banner-image-purchase-confirmation-page.png';
import noImg from '../../assets/no-image.png';
import star from '../../assets/star.svg';

export default function Restaurant() {
	const { state } = useLocation();
	const data = state.data as IRestaurant;
	const [restaurant, setRestaurant] = useState<IRestaurant>(data);

	// const { data: foods } = useQuery<IFood[]>({
	// 	queryKey: [`foods-${restaurant.id}`],
	// 	queryFn: async () => {
	// 		const response = await api.get('/products');
	// 		return response.data;
	// 	},
	// });

	// Modelo de rota da API para buscar os produtos de um restaurante

	const { data: foods } = useQuery<IFood[]>({
		queryKey: [`foods-${restaurant.id}`],
		queryFn: async () => {
			const { data } = await api.get(`/restaurants/${restaurant.id}/products`);
			const { associated_products } = data as IRestaurant;

			return associated_products;
		},
	});

	useEffect(() => {
		if (data) {
			localStorage.setItem('restaurantId', JSON.stringify(restaurant.id));
			setRestaurant(data);
		}
	}, [data]);

	return (
		<styled.Container>
			<styled.BannerImg
				src={
					restaurant.url_image_logo.includes('http')
						? restaurant.url_image_logo
						: image
				}
			/>

			<styled.Content>
				<styled.RestaurantInfo>
					<ImageBall
						src={
							restaurant.url_image_logo.includes('http')
								? restaurant.url_image_logo
								: noImg
						}
						text={restaurant.name}
						size='lg'
						shadow
					/>

					<styled.RestaurantTitleContainer>
						<styled.RestaurantTitle>{restaurant.name}</styled.RestaurantTitle>
						<styled.RestaurantScore>
							<img src={star} alt='Imagem de uma estrela' />
							{restaurant.classification}{' '}
						</styled.RestaurantScore>
					</styled.RestaurantTitleContainer>

					<styled.RestaurantDescription>
						{restaurant.description}
					</styled.RestaurantDescription>
				</styled.RestaurantInfo>

				<styled.Separator />

				<styled.FoodsContainer>
					{foods?.map((food) => (
						<FoodCard key={food.id} food={food} />
					))}
				</styled.FoodsContainer>
			</styled.Content>
		</styled.Container>
	);
}
