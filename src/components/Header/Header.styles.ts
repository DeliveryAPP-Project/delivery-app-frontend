import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 7.8rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: ${props => props.theme.colors.primary};
`;

export const Content = styled.div`
  max-width: 144rem;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding-inline: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigate = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Logo = styled(Link)`
  width: 5.5rem;
  height: 5.5rem;

  border-radius: 100%;
  background-color: #FEA200;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 6rem;
`;

export const LinkContent = styled.li`
  font-weight: 700;

  a {
    font-size: 2rem;
  }
`;

export const CartLink = styled(Link)`
  width: 4.8rem;
  height: 4.8rem;

  border-radius: 100%;
  background-color: white;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transform: translateX(-.15rem);
  }
`;