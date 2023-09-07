import * as styled from "./Footer.styles"

export function Footer() {
	return (
		<styled.Container>
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