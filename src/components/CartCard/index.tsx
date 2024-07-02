import { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import * as styled from './CartCard.styles';

import minusIcon from '../../assets/minusCircle.svg';
import plusIcon from '../../assets/plus-circle.png';
import trashIcon from '../../assets/trash-icon.svg';
import { useCart } from '../../context/cartContext';

type CartCardProps = {
	product: IFood & {
		quantity: number;
	};
};

export function CartCard({ product }: CartCardProps) {
	const [count, setCount] = useState(product.quantity);
	const { handleOpen, handleProduct, handleType } = useModal();
	const { handleRemoveProductFromCart, handleIncrementProduct } = useCart();

	function handleModal() {
		handleType('product');
		handleProduct(product);
		handleOpen();
	}

	function moneyFormatter(value: number) {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	}

	function handleSubCount() {
		count > 0 && setCount(count - 1);
	}

	return (
		<>
			<styled.Container>
				<styled.CardButtonClose
					onClick={() => handleRemoveProductFromCart(product.id)}
				>
					<img src={trashIcon} />
				</styled.CardButtonClose>

				<styled.CardImageContainer>
					<styled.CardImage
						src={product.url_image}
						alt={`Imagem de ${product.name}`}
					/>
				</styled.CardImageContainer>
				<styled.CardDescriptionContainer>
					<styled.CardTitle>{product.name}</styled.CardTitle>
					<div>
						<styled.CardDescription>
							{product.description}
						</styled.CardDescription>
						<button type='button' onClick={handleModal}>
							Ler mais
						</button>
					</div>
				</styled.CardDescriptionContainer>
				<styled.CardValueContainer>
					<span>{moneyFormatter(product.value)}</span>
					<styled.ActionContent>
						<styled.ButtonAction type='button' onClick={handleSubCount}>
							<img src={minusIcon} />
						</styled.ButtonAction>
						<span>{product.quantity}</span>
						<styled.ButtonAction
							type='button'
							onClick={() => handleIncrementProduct(product.id)}
						>
							<img src={plusIcon} />
						</styled.ButtonAction>
					</styled.ActionContent>
				</styled.CardValueContainer>
			</styled.Container>
		</>
	);
}
