import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  max-width: 144rem;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 30rem;
  height: 30rem;
  border-radius: 100%;
  box-shadow: 0 4.972130298614502px 14.916390419006348px 3.314753532409668px #00000040;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: .4rem;
  font-size: 2.6rem;

  color: #1E1E1E;

  span:first-child {
    font-weight: 700;
    color: #000000;
  }

  span + span {
    display: flex;
    align-items: center;
    column-gap: .6rem;
  }

  span:last-child {
    font-weight: 400;
  }
`;