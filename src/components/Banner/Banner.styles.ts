import { ComponentProps } from 'react';
import { LinkProps } from 'react-router-dom';
import styled from 'styled-components';

type IContent = ComponentProps<'div'> & {
  src: string;
};

export const Container = styled.section`
  width: 100%;
  padding-top: 7.8rem;

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
`;

export const Content = styled.div<IContent>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 63.7rem;
  max-width: 144rem;
  width: 100%;
  
  margin-inline: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3rem;

  height: 100%;

  width: 60%;
  padding-inline: 8rem;

  img {
    width: 25.3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 3rem;
  }
`;

export const ButtonLink = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.yellow1};

  width: 24.8rem;
  height: 7.5rem;
  border-radius: 2rem;
  box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;
