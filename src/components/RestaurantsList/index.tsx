import * as styled from './Restaurants.styles';
import RestaurantCard from '../RestaurantCard';

type IRestaurantList = {
	restaurants?: IRestaurant[];
};

export default function RestaurantsList({ restaurants }: IRestaurantList) {
	return (
		<styled.Container>
			{restaurants?.map((restaurant) => (
				<RestaurantCard key={restaurant.id} data={restaurant} />
			))}
		</styled.Container>
	);
}
