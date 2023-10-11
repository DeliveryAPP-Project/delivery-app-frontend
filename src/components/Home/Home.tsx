// import Header from '../Header/index';
import Header from '../Header';
import Card from '../Restaurants-and-foods/Card/index';

import * as styled from './Home.styles';

export function Home() {

  return (
    <styled.Container>
      <styled.Content>
        <Header />
        <Card />
      </styled.Content>
    </styled.Container>
  );
}
