import { ComponentProps } from 'react';
import styled from 'styled-components';

type IInput = ComponentProps<'input'> & {
  inputSize: string;
};

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
export const InputContainer = styled.input<IInput>`
  border: none;
  outline: none;
  background-color: inherit;

  font-size: 20px;

  width: ${props => props.inputSize};
`;
export const LabelContainer = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

