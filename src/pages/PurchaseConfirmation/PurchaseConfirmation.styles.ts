import { ComponentProps } from 'react';
import styled from 'styled-components';

type IBanner = ComponentProps<'div'> & {
  src: string;
};

export const Container = styled.div`
  
`;

export const Banner = styled.div<IBanner>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  height: 65.9rem;
  width: 144rem;
  margin-inline: auto;

  img {
    margin-top: 15rem;
    margin-left: 10rem;

    width: 40rem;
    height: 17.8rem;
  }
`;

export const Content = styled.div`
  max-width: 144rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    margin-block: 1.3rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  h2 {
    margin-top: 7.7rem;
    font-size: 4rem;
    font-weight: 600;
  }
`;

export const FormContainer = styled.form`
  margin-block: 2.5rem 7.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

export const FormLine = styled.div`
  display: flex;
  align-items: flex-start;
  /* justify-content: space-between; */

  max-width: 126.8rem;
  width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: 3rem;

  span {
    color: red;
  }
`;

export const FormButton = styled.button`
  border: none;
  cursor: pointer;

  width: fit-content;

  margin: 7.2rem auto 23.4rem;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 2.4rem 4.3rem;
  border-radius: 4.7rem;
  background-color: ${props => props.theme.colors.yellow1};
  box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 1rem;
  max-width: 101.5rem;
  width: 100%;

  margin: 7.2rem auto;

  ul {
    list-style: none;
    position: relative;

    width: 100%;
  }
  
  li::after {
    content: '';
    position: absolute;
    top: .8rem;
    left: -3rem;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.yellow1};
  }

  p {
    font-size: 3rem;
    font-weight: 600;
    line-height: 3.6rem;
  }
`;