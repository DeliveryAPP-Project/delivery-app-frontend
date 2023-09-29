import BannerImg from '../../assets/pizza-image.png';

import * as styled from './Banner.styles';

export function Banner() {
  return (
    <styled.Container>
      <styled.Content src={BannerImg}>
        <styled.TextContainer>
          <h1>HAMPER</h1>
          <p>
            Facilitamos sua busca pelo restaurante ideal. Com mais de 1000
            estabelecimentos cadastrados, ofertamos uma ampla quantidade de
            opções
          </p>

          <styled.ButtonLink to='#'>
            Restaurantes
          </styled.ButtonLink>
        </styled.TextContainer>
      </styled.Content>
    </styled.Container>
  );
}
