import { Link } from 'react-router-dom';

import Banner from '../Banner';
import BestRatedCard from '../BestRatedCard';

import * as styled from './Home.styles';

type IBestRated = {
  id: number;
  name: string;
  assessment: number;
  status: 'Aberto' | 'Fechado';
  imageUrl?: string;
};

const bestRatedFake: IBestRated[] = [
  {
    id: 1,
    name: 'Chef Master',
    assessment: 4.5,
    status: 'Aberto',
  },
  {
    id: 2,
    name: 'Chef Logo',
    assessment: 4.2,
    status: 'Aberto',
    imageUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 3,
    name: 'Barbecue',
    assessment: 4.8,
    status: 'Aberto',
    imageUrl:
      'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
  },
];

export function Home() {
  return (
    <styled.Container>
      <styled.Content>
        <Banner />

        <styled.BestRatedContainer>
          <h2>Os mais bem avaliados</h2>

          <styled.BestRatedContent>
            {bestRatedFake.map((restaurant) => (
              <BestRatedCard key={restaurant.id} data={restaurant} />
            ))}
          </styled.BestRatedContent>

          <Link to="#">Ver mais opções</Link>
        </styled.BestRatedContainer>
      </styled.Content>
    </styled.Container>
  );
}
