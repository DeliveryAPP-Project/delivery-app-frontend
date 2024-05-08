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
			'https://s3-alpha-sig.figma.com/img/71f2/4801/850b2ef20ea4fdd701cf074ad198c870?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mG6lryJatCXV3cZ0BkkzUIRcoFBL6d8EvjpXJ~1-rY4Ve90NURy2n4V2FoOy4BFan3ouKCJe38XnV4TtbAPN0aly49GplJfjvcLI8lMOl~fLSe2bGeIegqHoDSGuzxbU4VLL4XYdabWNyCCvsW1nJhp0l~-g02TUifR5eLWVtyfKTQlUxB0-AJLR8jXChHZ7q-lHnepHFi0g7IpMGLY~HqVDVVWhsTIqA0aHcpJXfdz94w1dYIfTDptF6bwl64x0t-HpRHZb1kIS637vSBm~8P-z3W-wiPfQCBQ65fWA0Y3yipdJp5qEOzC6W6B2VrWexxUeOnutldBgF5XZln-3qw__',
		quantity: 2,
	},
	{
		id: 2,
		name: 'Hambuguer Artesanal',
		description: 'Blend Bovino, Bacon, Gergilin...',
		value: 30,
		restaurant_id: 1,
		url_image:
			'https://s3-alpha-sig.figma.com/img/71f2/4801/850b2ef20ea4fdd701cf074ad198c870?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mG6lryJatCXV3cZ0BkkzUIRcoFBL6d8EvjpXJ~1-rY4Ve90NURy2n4V2FoOy4BFan3ouKCJe38XnV4TtbAPN0aly49GplJfjvcLI8lMOl~fLSe2bGeIegqHoDSGuzxbU4VLL4XYdabWNyCCvsW1nJhp0l~-g02TUifR5eLWVtyfKTQlUxB0-AJLR8jXChHZ7q-lHnepHFi0g7IpMGLY~HqVDVVWhsTIqA0aHcpJXfdz94w1dYIfTDptF6bwl64x0t-HpRHZb1kIS637vSBm~8P-z3W-wiPfQCBQ65fWA0Y3yipdJp5qEOzC6W6B2VrWexxUeOnutldBgF5XZln-3qw__',
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
