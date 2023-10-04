import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageType = ComponentProps<'div'> & {
  ImgUrl: string;
};

const NavTextBase = styled.div`
  font-weight: 700;
  size: 20px;

  color: ${(props) => props.theme.colors.black};
  line-height: 24.2px;
  font-family: ${(props) => props.theme.fonts.header};

  background: transparent;
  border: none;

  cursor: pointer;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 78px;

  background: ${(props) => props.theme.colors['main-yellow']};

  display: flex;
  align-items: center;

  nav {
    width: 303px;
    height: 48px;

    display: flex;
    align-items: center;
    gap: 38px;

    position: absolute;
    top: 14px;
    left: 1048px;
  }
`;

export const Logo = styled.div<ImageType>`
  width: 22px;
  height: 57px;

  position: relative;
  top: 11px;
  left: 73px;

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

  position: absolute;
  top: 11px;
  left: 56px;

  background: ${(props) => props.theme.colors['eclipse-yellow']};

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
