import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 80px;

  section {
    height: 400px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      row-gap: 24px;

      img {
        width: 320px;
      }

      h2 {
        font-size: 38px;
      }
    }
  }
`;

export const FaqSession = styled.div`
  margin-top: 100px;
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    li {
      font-size: 20px;

      display: flex;
      flex-direction: column;
      row-gap: 24px;

      span {
        font-weight: 700;
      }
      p {
        font-weight: 500;
      }
    }
  }
`;
