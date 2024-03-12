import { Link } from 'react-router-dom';
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
			const restaurants = data.restaurants as IRestaurant[];

			return restaurants;
		},
		queryKey: ['best-rated-restaurants'],
	});

	useEffect(() => {
		if (restaurants) {
			const ordererRestaurants = restaurants;

			ordererRestaurants.sort((a, b) =>
				a.classification > b.classification ? -1 : 1
			);

			setBestRatedRestaurants([
				ordererRestaurants[0],
				ordererRestaurants[1],
				ordererRestaurants[2],
			]);
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

			<Link to='/restaurantes'>Ver mais opções</Link>
		</styled.Container>
	);
}
