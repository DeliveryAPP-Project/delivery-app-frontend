import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    z-index: 101;

    width: 100vw;
    height: 100vh;

    inset: 0;

    background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  width: 360px;
  height: 430px;

  border-radius: 6px;

  padding: 40px 48px;
  background: ${props => props.theme.colors.white};

  position: fixed;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled(Dialog.Title)`
  font-family: ${props => props.theme.fonts.body};
  font-weight: 600;
  size: 65px;
  color: ${props => props.theme.colors.blackFont};
`;

export const TextContent = styled.div`
  width: 270px;
  text-align: center;

  font-family: ${props => props.theme.fonts.body};
  font-weight: 650;
  size: 36px;
  color: ${props => props.theme.colors.blackFont};
`;

export const ButtonsContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  width: 260px;
  height: 90px;
`;

export const CancelButton = styled(Dialog.Close)`
  width: 120px;
  height: 40px;

  padding: 0 10px;

  border: none;
  border-radius: 20px;

  background: ${props => props.theme.colors.primary};

  font-family: ${props => props.theme.fonts.body};
  font-weight: 700;
  color: ${props => props.theme.colors.blackFont};

  cursor: pointer;
`;

export const ConcludeButton = styled(CancelButton)`
`;
