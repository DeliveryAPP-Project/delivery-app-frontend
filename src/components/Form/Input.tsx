import { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

import * as styled from './Form.styles';

type IInput = ComponentProps<'input'> & {
	inputSize: string;
	name: string;
	type: string
	mask?: string| number
};

export default function Input({ inputSize, name, type ,...props }: IInput) {
	const { register } = useFormContext();

	return (
		<styled.InputContainer inputSize={inputSize} id={name} type={type} {...register(name)}>
			{props.children}
		</styled.InputContainer>
	);
}
