import noImage from '../../assets/no-image.png';
import starImg from '../../assets/star.svg';

import {
	Container,
	Content,
	ImageContainer,
	TextContainer,
} from './BestRatedCard.styles';

type IBestRatedCard = {
  data: IRestaurant
};

export default function BestRatedCard({ data }: IBestRatedCard) {
	return (
		<Container>
			<Content>
				<ImageContainer>
					{data.url_image_logo ? (
						<img src={data.url_image_logo} alt="" />
					) : (
						<img src={noImage} alt="" />
					)}
				</ImageContainer>

				<TextContainer>
					<span>{data.name}</span>
					<span>
						<img src={starImg} alt="Star icon" />
						{data.classification}
					</span>
					{/* <span>{data.status}</span>  */}
				</TextContainer>
			</Content>
		</Container>
	);
}

