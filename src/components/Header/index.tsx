import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/HLogo.png';
import cart from '../../assets/shopping-cart.png';
import * as styled from './Header.styles';

export default function Header() {
	const { pathname } = useLocation();
	const showLinks = pathname === '/' || (pathname === '/faq' && true);

	return (
		<styled.Container>
			<styled.Content>
				<styled.Navigate>
					<styled.Logo to='/'>
						<img src={logo} alt='Logo da HAMPER' />
					</styled.Logo>

					<styled.LinksContainer>
						{showLinks && (
							<>
								<styled.LinkContent>
									<Link to='/#sobre'>Sobre</Link>
								</styled.LinkContent>
								<styled.LinkContent>
									<Link to='/contato'>Contato</Link>
								</styled.LinkContent>
							</>
						)}

						<styled.CartLink to='/carrinho'>
							<img src={cart} alt='Imagem de carrinho de compras' />
						</styled.CartLink>
					</styled.LinksContainer>
				</styled.Navigate>
			</styled.Content>
		</styled.Container>
	);
}
