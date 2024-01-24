import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageType = ComponentProps<'div'> & {
  ImgUrl: string;
};

const NavTextBase = styled.a`
  font-weight: 700;
  size: 2rem;

  color: ${(props) => props.theme.colors.black};
  line-height: 2.42rem;
  font-family: ${(props) => props.theme.fonts.body};

  background: transparent;
  border: none;

  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
`;

export const HeaderContent = styled.header`
  width: 100%;
  max-width: 144rem;
  height: 7.8rem;

  background: ${(props) => props.theme.colors.yellow1};

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    width: 30.3rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    gap: 3.8rem;
  }
`;

export const Logo = styled.div<ImageType>`
  width: 2.2rem;
  height: 5.7rem;

  position: relative;
  top: -1.6rem;
  left: 7.2rem;

  background-image: url(${(props) => props.ImgUrl});
  background-size: contain;
  background-repeat: no-repeat;

  font-weight: 400;
  size: 4.5rem;
  line-height: 5.6rem;
`;

export const ElipseLogo = styled.div`
  width: 5.5rem;
  height: 5.5rem;

  position: relative;
  top: 2.9rem;
  left: 5.6rem;

  background: ${(props) => props.theme.colors.yellow1};

  border-radius: 50%;
  box-shadow: 0 .3rem .5rem 0 rgba(0, 0, 0, 0.25);
`;

export const About = styled(NavTextBase)`
  width: 5.8rem;
  height: 2.4rem;

  font-size: 2rem;
`;

export const Contact = styled(NavTextBase)`
  width: 8rem;
  height: 2.4rem;

  font-size: 2rem;
`;

export const Car = styled.div`
  width: 4.8rem;
  height: 4.8rem;
`;

export const ElipseCar = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 5rem;

  background: ${(props) => props.theme.colors.white};

  box-shadow: 0 .3rem .5rem 0 rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;

export const IconCar = styled.div<ImageType>`
  width: 2.4rem;
  height: 2.4rem;

  background-image: url(${(props) => props.ImgUrl});
  background-size: contain;
  background-repeat: no-repeat;

  position: relative;
  top: 1.3rem;
  left: 1.1rem;
`;
