import { ComponentProps } from 'react';
import { LinkProps } from 'react-router-dom';
import styled from 'styled-components';

type IContent = ComponentProps<'div'> & {
  src: string;
};

export const Container = styled.section`
  height: 637px;
  width: 100%;

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.blackFont};
`;

export const Content = styled.div<IContent>`
  background-image: url(${(props) => props.src});
  background-size: contain;
  height: 637px;
  width: 1440px;
  margin-inline: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;

  height: 100%;
  width: 60%;
  padding-inline: 80px;

  img {
    width: 253px;
    margin-bottom: 20px;
  }

  p {
    font-size: 30px;
  }
`;

export const ButtonLink = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.primary};

  width: 248px;
  height: 75px;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;
