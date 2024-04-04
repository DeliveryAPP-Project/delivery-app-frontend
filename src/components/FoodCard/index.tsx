import { useEffect, useState } from 'react';
import ImageBall from '../ImageBall';
import * as styled from './FoodCard.styles';

import noImg from '../../assets/no-image.png';
import plusIcon from '../../assets/plus-circle.png';
import minusIcon from '../../assets/minusCircle.svg';
import { useModal } from '../../context/ModalContext';

type IFoodCard = {
	food: IFood;
};

export default function FoodCard({ food }: IFoodCard) {
	const [count, setCount] = useState(0);
	const { handleOpen, handleProduct, handleType } = useModal();

	function moneyFormatter(value: number) {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	}

	function handleSumCount() {
		setCount(count + 1);
	}

	function handleSubCount() {
		count > 0 && setCount(count - 1);
	}

	function handleModal() {
		handleType('product');
		handleProduct(food);
		handleOpen();
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<styled.Container>
			<ImageBall
				src={food.url_image.includes('http') ? food.url_image : noImg}
				text={`Imagem de ${food.name}`}
				size='md'
			/>

			<styled.Content>
				<styled.Left>
					<styled.Title>{food.name}</styled.Title>
					<div>
						<styled.Description>{food.description}</styled.Description>
						<button type='button' onClick={handleModal}>
							Ler mais
						</button>
					</div>
				</styled.Left>

				<styled.Right>
					<styled.Money>{moneyFormatter(food.value)}</styled.Money>
					<styled.ActionContainer>
						<span>Quantidade</span>
						<styled.ActionContent>
							<styled.ButtonAction type='button' onClick={handleSubCount}>
								<img src={minusIcon} alt='' />
							</styled.ButtonAction>
							<span>{count}</span>
							<styled.ButtonAction type='button' onClick={handleSumCount}>
								<img src={plusIcon} alt='' />
							</styled.ButtonAction>
						</styled.ActionContent>

						<styled.ButtonAddCard>Adicionar ao carrinho</styled.ButtonAddCard>
					</styled.ActionContainer>
				</styled.Right>
			</styled.Content>
		</styled.Container>
	);
}
