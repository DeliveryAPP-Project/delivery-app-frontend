import * as styled from './RestaurantCard.styles';
import noImg from '../../assets/no-image.png';
import star from '../../assets/star.svg';
import { Link } from 'react-router-dom';

type IRestaurantCard = {
	data: IRestaurant;
};

export default function RestaurantCard({ data }: IRestaurantCard) {
	return (
		<styled.Container>
			<styled.Image
				src={data.url_image_logo.includes('http') ? data.url_image_logo : noImg}
				alt={
					data.url_image_logo
						? `Logo do restaurante ${data.name}`
						: 'Imagem de restaurante não encontrada'
				}
			/>

			<styled.InfoContainer>
				<styled.InfoContent>
					<h3>{data.name}</h3>
					<p>{data.location}</p>
				</styled.InfoContent>
			</styled.InfoContainer>
			<styled.InfoContainer>
			<styled.InfoContent2>
					<div>
						<img src={star} alt='Ícone de estrela' />
						<span>{data.classification}</span>
					</div>
					<Link to={`/restaurantes/${data.id}`} state={{ data: data }}>
						Ver
					</Link>
				</styled.InfoContent2>
			</styled.InfoContainer>
		</styled.Container>
	);
}
