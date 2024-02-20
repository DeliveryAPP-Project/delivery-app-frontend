import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import * as styled from './Restaurants.styles';

import Banner from '../../components/Banner';
import RestaurantsList from '../../components/RestaurantsList';

import { api } from '../../service/api';

import bannerImg from '../../assets/variedade-de-salada-saudavel-com-espaco-de-copia.png';
import search from '../../assets/Search.png';

const bannerRestaurantsInfo = {
	title: 'Restaurantes e Foods',
	description: 'Conheça os nossos restaurantes e foods parceiros!',
	bgImg: bannerImg,
};

export default function Restaurants() {
	const [restaurantsFiltered, setRestaurantsFiltered] = useState<IRestaurant[]>(
		[]
	);
	const [searchRestaurant, setSearchRestaurant] = useState('');

	const { data: restaurants } = useQuery<IRestaurant[]>({
		queryFn: async () => {
			const { data } = await api.get('/restaurants/');
			return data.restaurants;
		},
		queryKey: ['restaurants'],
	});

	useEffect(() => {
		if (restaurants) {
			setRestaurantsFiltered(
				restaurants?.filter((restaurant) =>
					restaurant.name.toLowerCase().includes(searchRestaurant.toLowerCase())
				)
			);
		}
	}, [searchRestaurant]);

	return (
		<>
			<Banner info={bannerRestaurantsInfo} />

			<styled.Content>
				<styled.FormSearch>
					<styled.IconSearch type='submit'>
						<img src={search} alt='Ícone de lupa' />
					</styled.IconSearch>
					<styled.InputSearch
						placeholder='Buscar restaurante'
						onChange={(e) => setSearchRestaurant(e.target.value)}
					/>
				</styled.FormSearch>

				<RestaurantsList
					restaurants={
						restaurantsFiltered.length > 0 ? restaurantsFiltered : restaurants
					}
				/>
			</styled.Content>
		</>
	);
}
