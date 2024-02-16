import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageType = ComponentProps<'div'> & {
  ImgUrl: string;
}

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const CardContent = styled.div`
  max-width: 144rem;
  width: 100%;
`;

export const CardImage = styled.div<ImageType>`
  width: 100%;
  height: 66rem;

  position: absolute;
  top: 7.8rem;

  background-image: url(${(props) => props.ImgUrl});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TitleCard = styled.h1`
  width: 55.5rem;
  height: 20.4rem;

  position: absolute;
  top: 11.9rem;
  left: 4rem;

  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  font-size: 8.4;
  line-height: 10.1rem;
  color: ${(props) => props.theme.colors.black};

  z-index: 1;
`;

export const SubTitleCard = styled.h2`
  width: 44.8rem;
  height: 7.2rem;

  position: absolute;
  top: 35.3rem;
  left: 5rem;

  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 500;
  font-size: 2.5;
  line-height: 3.6rem;
  color: ${(props) => props.theme.colors.black};
`;
