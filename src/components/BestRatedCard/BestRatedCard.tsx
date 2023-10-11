import noImage from '../../assets/no-image.png';
import starImg from '../../assets/star.svg';

import {
  Container,
  Content,
  ImageContainer,
  TextContainer,
} from './BestRatedCard.styles';

type IBestRatedCard = {
  data: {
    id: number;
    name: string;
    assessment: number;
    status: 'Aberto' | 'Fechado';
    imageUrl?: string;
  };
};

export function BestRatedCard({ data }: IBestRatedCard) {
  return (
    <Container>
      <Content>
        <ImageContainer>
          {data.imageUrl ? (
            <img src={data.imageUrl} alt="" />
          ) : (
            <img src={noImage} alt="" />
          )}
        </ImageContainer>

        <TextContainer>
          <span>{data.name}</span>
          <span>
            <img src={starImg} alt="Star icon" />
            {data.assessment}
          </span>
          <span>{data.status}</span>
        </TextContainer>
      </Content>
    </Container>
  );
}

