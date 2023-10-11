import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageType = ComponentProps<'div'> & {
  ImgUrl: string;
}

export const SearchForRestaurants = styled.input`
  width: 354.41px;
  height: 46px;

  position: relative;
  top: 837px;
  left: 534px;

  border-radius: 52.27px;
  border: none;
  padding-left: 50px;

  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 17px;
  color: ${(props) => props.theme.colors.black};

  box-shadow: 0px 4px 10px 0px ${(props) => props.theme.colors.black};

  &::placeholder{
    font-family: ${(props) => props.theme.fonts.inter};
    font-weight: 700;
    font-size: 20px;
    line-height: 24.2px;

    padding-left: 30px;
  }

  &:focus{
    outline: none;
  }
`;

export const SearchMagnifyingGlass = styled.div<ImageType>`
  width: 32.41px;
  height: 32.41px;

  position: relative;
  top: 800.32px;
  left: 552.64px;

  background-image: url(${(props) => props.ImgUrl});
  background-size: contain;
  background-repeat: no-repeat;
`;
