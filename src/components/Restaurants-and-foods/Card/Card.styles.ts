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
  width: 1440px;
`;

export const CardImage = styled.div<ImageType>`
  width: 100%;
  height: 660px;

  position: absolute;
  top: 78px;

  background-image: url(${(props) => props.ImgUrl});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TitleCard = styled.h1`
  width: 555px;
  height: 204px;

  position: absolute;
  top: 119px;
  left: 40px;

  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  font-size: 84px;
  line-height: 101.66px;
  color: ${(props) => props.theme.colors.blackFont};

  z-index: 1;
`;

export const SubTitleCard = styled.h2`
  width: 448px;
  height: 72px;

  position: absolute;
  top: 353px;
  left: 50px;

  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 500;
  font-size: 25px;
  line-height: 36.31px;
  color: ${(props) => props.theme.colors.blackFont};
`;
