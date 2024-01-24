import styled from 'styled-components';

export const Container = styled.div`
  width: 61.8rem;
  height: 22.7rem;
  padding: 1.6rem;
  border-radius: 2rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 3.3rem;
  align-items: center;

  .information {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 2rem;
      font-family: Inter;
      font-weight: 700;
    }

    small {
      font-family: Inter;
      font-size: 2rem;
      font-weight: 500;
    }

    small:last-child {
      color: #0038ff;
      font-family: Inter;
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export const ContainerBuy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
  strong {
    font-family: Inter;
    font-size: 2rem;
    font-weight: 700;
  }

  .information-buy {
    display: flex;
    flex-direction: column;
    gap: .2rem;

    small {
      font-family: Inter;
      font-size: 1.4rem;
      font-weight: 700;
    }

    .container-buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      button {
        background: transparent;
        border: none;
      }

      strong {
        color: ${(props) => props.theme.colors.black};
        font-family: Inter;
        font-size: 2rem;
        font-weight: 700;
      }
    }
  }
`;

export const Button = styled.button`
  box-shadow: 0 .4rem .4rem 0 rgba(0, 0, 0, 0.25);
  border-radius: 5rem;
  background: ${(props) => props.theme.colors.yellow1};

  border: none;
  width: 17rem;
  height: 5.3rem;
  text-align: center;

  small {
    color: ${(props) => props.theme.colors.black};;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 700;
    width: 9.3rem;
  }
`;
