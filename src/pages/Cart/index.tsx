import * as styled from './Cart.styles';

import { Link } from 'react-router-dom';
import imgBanner from '../../assets/cart-img-banner.jpeg';
import emptyCartIcon from '../../assets/empty-cart-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import imgCartIcon from '../../assets/shopping-cart.png';
import { CartCard } from '../../components/CartCard';
import { useCart } from '../../context/cartContext';

export function Cart() {
	const { cart } = useCart();

	function totalCart() {
		let total = 0;
		cart.forEach((item) => {
			total += item.product.value * item.quantity;
		});
		return total;
	}

	function moneyFormatter(value: number) {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	}

	return (
		<>
			<styled.Container>
				<styled.ImageBanner src={imgBanner} />
				<styled.CartContainer>
					<styled.CartIconContainer>
						<styled.CartIcon src={imgCartIcon} />
					</styled.CartIconContainer>
					{cart.length > 0 ? (
						<>
							<styled.CartContainerDescription>
								<styled.CartContainerTitle>Carrinho</styled.CartContainerTitle>

								<styled.CartCardContainer>
									{cart.map((item) => (
										<CartCard key={item.product.id} product={{
											id: item.product.id,
											name: item.product.name,
											description: item.product.description,
											value: item.product.value,
											restaurant_id: item.product.restaurant_id,
											url_image: item.product.url_image,
											quantity: item.quantity,
										}} />
									))}
								</styled.CartCardContainer>
							</styled.CartContainerDescription>

							<styled.AddMoreProductsContainer>
								<Link to={'/restaurantes'}>
									<img src={plusIcon} />
									<span>Adicionar itens</span>
								</Link>

								<styled.Divide />
							</styled.AddMoreProductsContainer>

							<styled.CartTotalValue>
								Total da compra: {moneyFormatter(totalCart())}
							</styled.CartTotalValue>

							<styled.ActionContainer>
								<Link to={'/restaurantes'}>Voltar</Link>
								<Link to={'/conclua-sua-compra'}>Concluir pedido</Link>
							</styled.ActionContainer>
						</>
					) : (
						<>
							<styled.CartEmptyContainer>
								<styled.CartEmptyTitle>
									Seu carrinho está vazio
								</styled.CartEmptyTitle>
								<img src={emptyCartIcon} />

								<Link to={'/restaurantes'}>Voltar</Link>
							</styled.CartEmptyContainer>
						</>
					)}
				</styled.CartContainer>
			</styled.Container>
		</>
	);
}
