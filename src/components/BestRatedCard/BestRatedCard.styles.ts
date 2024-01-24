import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  width: 30rem;
  height: 30rem;

  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0px .5rem 1.5rem .3rem #00000040;

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
  row-gap: .4rem;
  font-size: 2.6rem;

  color: #1E1E1E;

  span:first-child {
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
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