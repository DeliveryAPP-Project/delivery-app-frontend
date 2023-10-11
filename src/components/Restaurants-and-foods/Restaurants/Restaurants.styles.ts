import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageType = ComponentProps<'div'> & {
  ImgUrl: string;
}

export const ContainerRestaurantsAndFoods = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(618px, 1fr));
  column-gap: 142px;
  row-gap: 60px;

  width: 1440px;
  min-height: 227px;

  padding: 0 30px;

  position: absolute;
  top: 965px;
`;

export const CardsRestaurantsAndFoods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 618px;
  height: 227px;

  border-radius: 20px;
  padding: 20px;

  box-shadow:  5px 5px 11px #bababa,
             -5px -5px 11px #ffffff;
`;

export const PhotoOfTheRestaurant = styled.div<ImageType>`
  width: 190px;
  height: 190px;

  border-radius: 100px;

  background-image: url(${(props) => props.ImgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const RestaurantInformation = styled.div`
  display: flex;

  width: 359px;
  height: 168px;
`;

export const DivSeparation = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  width: 100%;
`;

export const TitleRestaurant = styled.h1`
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 700;
  font-size: 20px;
  line-height: 24.2px;
`;

export const TextRestaurant = styled.span`
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 17px;
  line-height: 24.2px;
  text-align: start;
`;

export const ViewButton = styled.button`
  width: 170px;
  height: 53px;

  border: none;
  border-radius: 50px;

  background: ${(props) => props.theme.colors['main-yellow']};

  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 700;
  font-size: 20px;
  line-height: 24.2px;

  cursor: pointer;
`;

export const EvaluationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Evaluation = styled.span`
  width: 33px;
  height: 24px;

  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 700;
  font-size: 20px;
  line-height: 24.2px;
  color: ${(props) => props.theme.colors.black};
`;

export const Star = styled.span<ImageType>`
  width: 23px;
  height: 21.85px;

  background-image: url(${(props) => props.ImgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;
