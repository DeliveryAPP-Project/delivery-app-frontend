import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageType = ComponentProps<'div'> & {
  ImgUrl: string;
};

const NavTextBase = styled.div`
  font-weight: 700;
  size: 20px;

  color: ${(props) => props.theme.colors.blackFont};
  line-height: 24.2px;
  font-family: ${(props) => props.theme.fonts.body};

  background: transparent;
  border: none;

  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 78px;

  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.header`
  width: 1440px;
  height: 78px;

  position: fixed;
  z-index: 100;

  background: ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;

  nav {
    width: 303px;
    height: 48px;

    display: flex;
    align-items: center;
    gap: 38px;

    position: relative;
    left: 1074px;
  }
`;

export const Logo = styled.div<ImageType>`
  width: 22px;
  height: 57px;

  position: relative;
  top: -16px;
  left: 72px;

  background-image: url(${(props) => props.ImgUrl});
  background-size: contain;
  background-repeat: no-repeat;

  font-weight: 400;
  size: 45.56px;
  line-height: 56.95px;
`;

export const ElipseLogo = styled.div`
  width: 55px;
  height: 55px;

  position: relative;
  top: 29px;
  left: 56px;

  background: ${(props) => props.theme.colors.primary};

  border-radius: 50%;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const About = styled(NavTextBase)`
  width: 58px;
  height: 24px;
`;

export const Contact = styled(NavTextBase)`
  width: 80px;
  height: 24px;
`;

export const Car = styled.div`
  width: 48px;
  height: 48px;
`;

export const ElipseCar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50px;

  background: ${(props) => props.theme.colors.white};

  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;

export const IconCar = styled.div<ImageType>`
  width: 24px;
  height: 24px;

  background-image: url(${(props) => props.ImgUrl});
  background-size: contain;
  background-repeat: no-repeat;

  position: relative;
  top: 13px;
  left: 11px;
`;
