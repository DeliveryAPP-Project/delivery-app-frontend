import styled from 'styled-components';

export const Container = styled.div`
  width: 618px;
  height: 227px;
  padding: 16px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  .close-button {
    position: absolute;
    top: 10px;
    right: 16px;
    border: none;
    background-color: transparent;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 33px;
  align-items: center;

  img {
    width: 190px;
    height: 190px;
    border-radius: 1200px;
  }

  .information {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 20px;
      font-family: Inter;
      font-weight: 700;
    }

    small {
      font-family: Inter;
      font-size: 20px;
      font-weight: 500;
    }

    small:last-child {
      color: #0038ff;
      font-family: Inter;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const ContainerBuy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  strong {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
  }

  .information-buy {
    display: flex;
    flex-direction: column;
    gap: 2px;

    small {
      font-family: Inter;
      font-size: 14.483px;
      font-weight: 700;
    }

    .container-buttons {
      display: flex;
      align-items: center;
      gap: 10px;
      button {
        background: transparent;
        border: none;
      }

      strong {
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
`;

export const Button = styled.button`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  background: var(--Amarelo-principal, #faa613);

  border: none;
  width: 170px;
  height: 53px;
  text-align: center;

  small {
    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    width: 93px;
  }
`;
