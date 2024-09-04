import BestRatedCard from '../BestRatedCard';
import * as styled from './BestRated.styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../service/api';
import { useEffect, useState } from 'react';

export default function BestRated() {
	const [bestRatedRestaurants, setBestRatedRestaurants] = useState<
		IRestaurant[]
	>([]);

	const { data: restaurants } = useQuery<IRestaurant[]>({
		queryFn: async () => {
			const { data } = await api.get('/restaurants/');
			const restaurants = data as IRestaurant[];

			return restaurants;
		},
		queryKey: ['best-rated-restaurants'],
	});

	function handleOrdererRestaurants(restaurants: IRestaurant[]) {
		const ordererRestaurants = restaurants;

		ordererRestaurants.sort((a, b) =>
			a.classification > b.classification ? -1 : 1
		);

		return ordererRestaurants;
	}

	function handleSelectBestRatedRestaurants(restaurants: IRestaurant[]) {
		restaurants.length > 3
			? setBestRatedRestaurants(restaurants.slice(0, 3))
			: setBestRatedRestaurants(restaurants);
	}

	useEffect(() => {
		if (restaurants) {
			const ordererRestaurants = handleOrdererRestaurants(restaurants);
			handleSelectBestRatedRestaurants(ordererRestaurants);
		}
	}, [restaurants]);

	return (
		<styled.Container>
			<h2>Os mais bem avaliados</h2>

			<styled.BestRatedContent>
				{bestRatedRestaurants?.map((restaurant) => (
					<BestRatedCard key={restaurant.id} data={restaurant} />
				))}
			</styled.BestRatedContent>

			<styled.BestRatedLink to='/restaurantes'>
				Ver mais opções
			</styled.BestRatedLink>
		</styled.Container>
	);
}
