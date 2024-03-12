import noImg from '../../assets/no-image.png';
import starImg from '../../assets/star.svg';

import * as styled from './BestRatedCard.styles';

type IBestRatedCard = {
	data: IRestaurant;
};

export default function BestRatedCard({ data }: IBestRatedCard) {
	return (
		<styled.Container>
			<styled.Content>
				{/* Quando for corrigido os links das imagens na api, pode retirar o .includes */}
				<styled.Image
					src={
						data.url_image_logo.includes('http') ? data.url_image_logo : noImg
					}
					alt={
						data.url_image_logo
							? `Logo do restaurante ${data.name}`
							: 'Imagem de restaurante não encontrada'
					}
				/>

				<styled.TextContainer>
					<span>{data.name}</span>
					<span>
						<img src={starImg} alt='Star icon' />
						{data.classification}
					</span>
					{/* <span>{data.status}</span>  */}
				</styled.TextContainer>
			</styled.Content>
		</styled.Container>
	);
}
