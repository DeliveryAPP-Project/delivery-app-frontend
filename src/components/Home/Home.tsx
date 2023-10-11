import Header from '../Header/index';
import Banner from '../Banner';

import * as styled from './Home.styles';

export function Home() {
  return (
    <styled.Container>
      <styled.Content>
        <Header />
        <Banner />
      </styled.Content>
    </styled.Container>
  );
}
