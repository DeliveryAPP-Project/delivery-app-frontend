import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageType = ComponentProps<'div'> & {
  ImgUrl: string;
}

export const ContainerRestaurantsAndFoods = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(61.8rem, 1fr));
  column-gap: 14.2rem;
  row-gap: 6rem;

  max-width: 144rem;
  width: 100%;
  min-height: 22.7rem;

  padding: 0 3rem;

  position: absolute;
  top: 96.5rem;
`;

export const CardsRestaurantsAndFoods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 61.8rem;
  height: 22.7rem;

  border-radius: 2rem;
  padding: 2rem;

  box-shadow:  .5rem .5rem 1.1rem #bababa,
             -0.5rem -0.5rem 1.1rem #ffffff;
`;

export const PhotoOfTheRestaurant = styled.div<ImageType>`
  width: 19rem;
  height: 19rem;

  border-radius: 10rem;

  background-image: url(${(props) => props.ImgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const RestaurantInformation = styled.div`
  display: flex;

  width: 35.9rem;
  height: 16.8rem;
`;

export const DivSeparation = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  width: 100%;
`;

export const TitleRestaurant = styled.h1`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
`;

export const TextRestaurant = styled.span`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.7rem;
  line-height: 2.4rem;
  text-align: start;
`;

export const ViewButton = styled.button`
  width: 17rem;
  height: 5.3rem;

  border: none;
  border-radius: 5rem;

  background: ${(props) => props.theme.colors.yellow1};

  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;

  cursor: pointer;
`;

export const EvaluationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`;

export const Evaluation = styled.span`
  width: 3.3rem;
  height: 2.4rem;

  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.black};
`;

export const Star = styled.span<ImageType>`
  width: 2.3rem;
  height: 2.2rem;

  background-image: url(${(props) => props.ImgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;
