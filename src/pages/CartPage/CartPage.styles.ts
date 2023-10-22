import styled from 'styled-components';

export const Page = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 165px;
`;

export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentCart = styled.div`
  width: 800px;
  height: 1182px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;

  border-radius: 25.934px;
  border-top: 9.001px solid #faa613;
  background: #fff;

  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

  h1 {
    color: #1e1e1e;
    width: 473.735px;

    text-align: center;
    font-family: Inter;
    font-size: 65px;
    font-weight: 700;
  }

  h2 {
    color: #1e1e1e;

    text-align: center;
    font-family: Inter;
    font-size: 35px;
    font-weight: 700;
  }

  hr {
    stroke-width: 0.9px;
    stroke: #737373;
    width: 676.04px;
  }
`;

export const ContainerCartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;

  button {
    border: none;
    background-color: transparent;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    color: #000;

    font-family: Inter;
    font-size: 21.889px;
    font-weight: 700;
  }
`;

export const ContentCartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  gap: 100px;

  div {
    display: flex;
    gap: 200px;
    align-items: space-between;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  border-radius: 47.098px;
  border: none;
  background: #faa613;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 233.606px;
  height: 70.647px;

  color: #000;

  font-family: Inter;
  font-size: 18.839px;
  font-weight: 700;
`;
