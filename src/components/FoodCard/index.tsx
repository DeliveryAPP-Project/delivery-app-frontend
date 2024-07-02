import { useEffect, useState } from 'react';
import ImageBall from '../ImageBall';
import * as styled from './FoodCard.styles';

import noImg from '../../assets/no-image.png';
import plusIcon from '../../assets/plus-circle.png';
import minusIcon from '../../assets/minusCircle.svg';
import { useModal } from '../../context/ModalContext';
import { useCart } from '../../context/cartContext';

type IFoodCard = {
	food: IFood;
};

export default function FoodCard({ food }: IFoodCard) {
	const [count, setCount] = useState(0);
	const { handleOpen, handleProduct, handleType } = useModal();
	const {
		cart,
		handleAddProductToCart,
		handleIncrementProduct,
		handleDecrementProduct,
		handleRemoveProductFromCart,
	} = useCart();

	function moneyFormatter(value: number) {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	}

	function handleSumCount() {
		if (cart.length > 0) {
			cart.forEach((item) => {
				if (item.product.id === food.id) {
					handleIncrementProduct(food.id);
				} else {
					setCount(count + 1);
				}
			});
		} else {
			setCount(count + 1);
		}
	}

	function handleSubCount() {
		if (cart.length > 0 && count > 1) {
			cart.forEach((item) => {
				if (item.product.id === food.id) {
					handleDecrementProduct(food.id);
				} else {
					setCount(count - 1);
				}
			});
		}
	}

	function handleModal() {
		handleType('product');
		handleProduct(food);
		handleOpen();
	}

	function handleRemoveProduct() {
		handleRemoveProductFromCart(food.id);
		setCount(0);
	}

	useEffect(() => {
		if (cart.length > 0) {
			const updatedCount =
				cart.find((item) => item.product.id === food.id)?.quantity ?? 0;

			setCount(updatedCount);
		}
	}, []);

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

						{cart.find((item) => item.product.id === food.id) ? (
							<styled.ButtonRemoveCard onClick={handleRemoveProduct}>
								Remover do carrinho
							</styled.ButtonRemoveCard>
						) : (
							<styled.ButtonAddCard
								onClick={() =>
									count > 0 &&
									handleAddProductToCart({ product: food, quantity: count })
								}
							>
								Adicionar ao carrinho
							</styled.ButtonAddCard>
						)}
					</styled.ActionContainer>
				</styled.Right>
			</styled.Content>
		</styled.Container>
	);
}
