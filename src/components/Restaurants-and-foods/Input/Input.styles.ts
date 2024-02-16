import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageType = ComponentProps<'div'> & {
  ImgUrl: string;
}

export const SearchForRestaurants = styled.input`
  width: 35.4rem;
  height: 4.6rem;

  position: relative;
  top: 83.7rem;
  left: 53.4rem;

  border-radius: 5.2rem;
  border: none;
  padding-left: 5rem;

  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.black};

  box-shadow: 0 .4rem 1rem 0 ${(props) => props.theme.colors.black};

  &::placeholder{
    font-family: ${(props) => props.theme.fonts.body};
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;

    padding-left: 3rem;
  }

  &:focus{
    outline: none;
  }
`;

export const SearchMagnifyingGlass = styled.div<ImageType>`
  width: 3.2rem;
  height: 3.2rem;

  position: relative;
  top: 80rem;
  left: 55.2rem;

  background-image: url(${(props) => props.ImgUrl});
  background-size: contain;
  background-repeat: no-repeat;
`;
