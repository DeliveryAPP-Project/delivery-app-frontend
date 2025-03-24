import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/HLogo.png';
import * as styled from './Header.styles';
import { useCart } from '../../context/cartContext';
import cartImg from "../../assets/shopping-cart.png"

export default function Header() {
	const { pathname } = useLocation();
	const showLinks = pathname === '/' || (pathname === '/faq' && true);
	const { cart } = useCart()

	return (
		<styled.Container>
			<styled.Content>
				<styled.Navigate>
					<styled.Logo to='/'>
						<span></span>
						<img src={logo} alt='Logo da HAMPER' />
					</styled.Logo>

					<styled.LinksContainer>
						{showLinks && (
							<>
								{pathname === '/' ?
									<styled.registryContainer>
										<p> Buscando expandir seu negócio? </p>
										<span> Cadastre-se grátis </span>
									</styled.registryContainer> : ''
								}

								<styled.LinkContent>
									<Link to='/#sobre'>Sobre</Link>
								</styled.LinkContent>
								<styled.LinkContent>
									<Link to='/contato'>Contato</Link>
								</styled.LinkContent>


							</>
						)}
						{(pathname !== '/') && (
							<styled.ContainerIconCart>
								{cart.numberProducts >= 1 ? (
									<styled.CircusSpan>{cart.numberProducts}</styled.CircusSpan>
								) : (
									""
								)}
								<styled.CartLink to='/carrinho'>
									<img src={cartImg} alt='Imagem de carrinho de compras' />
								</styled.CartLink>
							</styled.ContainerIconCart>
						)}


					</styled.LinksContainer>
				</styled.Navigate>
			</styled.Content>
		</styled.Container>
	);
}
