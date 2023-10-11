import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  max-width: 1440px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0px 4.972130298614502px 14.916390419006348px 3.314753532409668px #00000040;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  font-size: 26px;

  color: #1E1E1E;

  span:first-child {
    font-weight: 700;
    color: #000000;
  }

  span + span {
    display: flex;
    align-items: center;
    column-gap: 6px;
  }

  span:last-child {
    font-weight: 400;
  }
`;