import * as styled from './Cart.styles';

import { Link } from 'react-router-dom';
import imgBanner from '../../assets/cart-img-banner.jpeg';
import emptyCartIcon from '../../assets/empty-cart-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import imgCartIcon from '../../assets/shopping-cart.png';
import { CartCard } from '../../components/CartCard';

const cartProducts: ICart[] = [
	{
		id: 1,
		name: 'Hambuguer Artesanal',
		description: 'Blend Bovino, Bacon, Gergilin...',
		value: 30,
		restaurant_id: 1,
		url_image:
			'https://s3-alpha-sig.figma.com/img/71f2/4801/850b2ef20ea4fdd701cf074ad198c870?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O0WM6T6biFSgDObEB0YALlY8aF84gneFjo8WPbjxdHsJgEu2gXMgjcCQtbfhyoCuMdv7Y3Luxwq~2f0QoKCz2pY5YairrK5Jn78SZYsAQ5fzWD1nyrK5nFKSEkqVXh0NW1MkXVrScDyNiJ1D~b0YvBL2UhuElZ4zhrHIviWSJ7G0vCWlZ3m2yPWf2rj8n7pc4CV~9cU-y7C8-1dAVApk0e5EhuEfc54jQLE5tZWzzm6CMxLsNKfEvEwiOr-aNdgPAEbqYvrMszFyRmyGhfPIyoJpd9UVv2o1EQZX-YcHWMoerjdNYM~T8nX2vaQG3JzHF6eX599B-dloxrOXCVfZig__',
		quantity: 2,
	},
	{
		id: 2,
		name: 'Hambuguer Artesanal',
		description: 'Blend Bovino, Bacon, Gergilin...',
		value: 30,
		restaurant_id: 1,
		url_image:
			'https://s3-alpha-sig.figma.com/img/71f2/4801/850b2ef20ea4fdd701cf074ad198c870?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O0WM6T6biFSgDObEB0YALlY8aF84gneFjo8WPbjxdHsJgEu2gXMgjcCQtbfhyoCuMdv7Y3Luxwq~2f0QoKCz2pY5YairrK5Jn78SZYsAQ5fzWD1nyrK5nFKSEkqVXh0NW1MkXVrScDyNiJ1D~b0YvBL2UhuElZ4zhrHIviWSJ7G0vCWlZ3m2yPWf2rj8n7pc4CV~9cU-y7C8-1dAVApk0e5EhuEfc54jQLE5tZWzzm6CMxLsNKfEvEwiOr-aNdgPAEbqYvrMszFyRmyGhfPIyoJpd9UVv2o1EQZX-YcHWMoerjdNYM~T8nX2vaQG3JzHF6eX599B-dloxrOXCVfZig__',
		quantity: 1,
	},
];

export function Cart() {
	function totalCart() {
		let total = 0;
		cartProducts.forEach((product) => {
			total += product.value * product.quantity;
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
					{cartProducts.length > 0 ? (
						<>
							<styled.CartContainerDescription>
								<styled.CartContainerTitle>Carrinho</styled.CartContainerTitle>

								<styled.CartCardContainer>
									{cartProducts.map((product) => (
										<CartCard key={product.id} product={product} />
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
