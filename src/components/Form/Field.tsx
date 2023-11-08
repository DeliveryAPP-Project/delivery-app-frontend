import { ComponentProps } from 'react';

import * as styled from './Form.styles';

type IField = ComponentProps<'div'>

export function Field(props: IField) {
  return (
    <styled.FieldContainer>
      {props.children}
    </styled.FieldContainer>
  );
}