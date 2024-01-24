import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 144rem;
  width: 100%;
  margin-inline: auto;
  padding-inline: 8rem;
  padding-top: 10rem;

  section {
    height: 40rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;

      img {
        width: 32rem;
      }

      h2 {
        font-size: 3.8rem;
      }
    }
  }
`;

export const FaqSession = styled.div`
  margin-top: 10rem;
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;

    li {
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
      font-size: 1.6rem;

      span {
        font-weight: 700;
      }
      p {
        font-weight: 500;
      }
    }
  }
`;
