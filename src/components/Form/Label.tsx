import { ComponentProps } from 'react';

import * as styled from './Form.styles';

type ILabel = ComponentProps<'label'>

export function Label(props: ILabel) {
  return (
    <styled.LabelContainer>
      {props.children}
    </styled.LabelContainer>
  );
}