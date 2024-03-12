import { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

import * as styled from './Form.styles';

type IInput = ComponentProps<'input'> & {
  inputSize: string;
  name: string;
};

export default function Input({ inputSize, name, ...props }: IInput) {
	const { register } = useFormContext();

	return (
		<styled.InputContainer inputSize={inputSize} id={name} {...register(name)}>
			{props.children}
		</styled.InputContainer>
	);
}
