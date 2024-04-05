import * as styled from './Modal.styles';
import noImg from '../../assets/no-image.png';
import xImg from '../../assets/x.png';
import ImageBall from '../ImageBall';

type IModalFood = {
	product: IFood;
  handleClose: () => void;
};

export function ModalFood({ product, handleClose }: IModalFood) {
	return (
		<styled.ModalFoodContainer>
			<styled.ModalFoodCloseButton onClick={handleClose}>
				<img src={xImg} alt="Ícone de x" />
			</styled.ModalFoodCloseButton>

			{product.url_image && (
				<ImageBall
					src={product.url_image.includes('http') ? product.url_image : noImg}
					text={`Imagem de ${product.name}`}
					size='xl'
				/>
			)}

			<styled.ModalFoodDescription>
				<h2>{product.name}</h2>
				<p>{product.description}</p>
			</styled.ModalFoodDescription>
		</styled.ModalFoodContainer>
	);
}
