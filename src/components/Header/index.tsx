import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/HLogo.png';
import cartt from '../../assets/shopping-cart.png';
import * as styled from './Header.styles';
import { useCart } from '../../context/cartContext';


export default function Header() {
	const { pathname } = useLocation();
	const showLinks = pathname === '/' || (pathname === '/faq' && true);
	const { cart } = useCart()

	console.log(`aqui e o cart do header: ${cart.length}`)
	

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
								<styled.LinkContent>
									<Link to='/#sobre'>Sobre</Link>
								</styled.LinkContent>
								<styled.LinkContent>
									<Link to='/contato'>Contato</Link>
								</styled.LinkContent>
							</>
						)}
						<span>{cart.length}</span>
						<styled.CartLink to='/carrinho'>
							<img src={cartt} alt='Imagem de carrinho de compras' />
						</styled.CartLink>
					</styled.LinksContainer>
				</styled.Navigate>
			</styled.Content>
		</styled.Container>
	);
}
