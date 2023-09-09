import * as styled from "./Footer.styles"

export function Footer() {
	return (
		<styled.Container>
			<styled.AboutUsTitle>
				Sobre nós
			</styled.AboutUsTitle>
			<styled.AboutUs>
				<br/>
				Na Hamber, nossa missão é simples, mas poderosa: conectar os amantes de comida a uma variedade diversificada de restaurantes incríveis e suas deliciosas iguarias, tudo através de uma plataforma fácil de usar. Trabalhamos arduamente para facilitar o acesso a uma ampla seleção de restaurantes e oferecemos uma experiência de pedido online sem complicações.
			</styled.AboutUs>
			<svg xmlns="http://www.w3.org/2000/svg" width="770" height="2" viewBox="0 0 770 2" fill="none">
				<path d="M0 1H770" stroke="black" width="770" stroke-width="2"/>
			</svg>
			<styled.BrandName>
				HAMBER
			</styled.BrandName>
			<styled.LinksFooterContainer>
				<span>
					CNPJ: XXXXXXXXXXXXX
				</span>
				<a href="#">Termos e condições / Política de Privacidade</a>
				<a href="#">FAQ</a>
				<span>E-mail: <a href="mailto:sitedelivery@gmail.com">sitedelivery@gmail.com</a></span>
			</styled.LinksFooterContainer>
		</styled.Container>
	)
}