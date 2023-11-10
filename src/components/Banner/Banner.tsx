import logo from '../../assets/logo.svg';
import BannerImg from '../../assets/pizza-image.png';

import * as styled from './Banner.styles';

export function Banner() {
  return (
    <styled.Container>
      <styled.Content src={BannerImg}>
        <styled.TextContainer>
          <img src={logo} alt="Logo da HAMPER" />
          <p>
            Facilitamos sua busca pelo restaurante ideal. Com mais de 1000
            estabelecimentos cadastrados, ofertamos uma ampla quantidade de
            opções
          </p>

          <styled.ButtonLink to='/restaurants'>
            Restaurantes
          </styled.ButtonLink>
        </styled.TextContainer>
      </styled.Content>
    </styled.Container>
  );
}
