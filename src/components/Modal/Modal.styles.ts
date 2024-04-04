import { Link } from 'react-router-dom';
import styled from 'styled-components';

type IContainer = {
  isOpen: boolean;
}

export const Container = styled.div<IContainer>`
  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};

  background-color: rgba(79, 79, 79, .7);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 3rem;
  border-radius: 3rem;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0 0 1.1rem .9rem rgba(0, 0, 0, 0.25);

  &::after {
    content: '';
    position: absolute;
    top: .9rem;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;

    background-color: white;

    z-index: 10;
  }
`;

export const ModalFoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  z-index: 20;
`;

export const ModalFoodCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  position: absolute;
  top: 0;
  right: -1rem;

  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;

    pointer-events: none;
  }
`;

export const ModalFoodDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 1rem;
  font-size: 2.4rem;

  h2 {
    font-weight: 700;
  }

  p {
    font-weight: 600;
  }
`;

export const ModalInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: 7rem;

  z-index: 20;
`;

export const ModalInformationTitle = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 5rem;
`;

export const ModalInformationDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 2rem;

  max-width: 40rem;
`;

export const ModalInformationDescription = styled.p`
  font-size: 2.4rem;
  text-align: center;
`;

export const ModalInformationActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 10rem;
  margin-top: 10rem;
`;

export const ModalInformationActionLink = styled(Link)`
  border-radius: 5rem;

  padding: 2.4rem 2rem;
  font-size: 1.8rem;
  font-weight: 700;

  cursor: pointer;

  background-color: ${props => props.theme.colors.primary};
`;

export const ModalInformationActionButton = styled.button`
  background: none;
  border: none;
  border-radius: 5rem;

  padding: 2.4rem 2rem;
  font-size: 1.8rem;
  font-weight: 700;

  cursor: pointer;

  background-color: ${props => props.theme.colors.primary};
`;