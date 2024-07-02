import { ComponentProps } from 'react';
import styled from 'styled-components';

type IBanner = ComponentProps<'div'> & {
	src: string;
};

export const Container = styled.div``;

export const Banner = styled.div<IBanner>`
	background-image: url(${(props) => props.src});
	background-size: cover;
	background-repeat: no-repeat;
	height: 659px;
	width: 1440px;
	margin-inline: auto;

	img {
		margin-top: 150px;
		margin-left: 100px;

		width: 400px;
		height: 178px;
	}
`;

export const Content = styled.div`
	max-width: 1440px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		margin-block: 13px;
	}

	h1 {
		font-size: 40px;
		font-weight: 600;
	}

	h2 {
		margin-top: 77px;
		font-size: 40px;
		font-weight: 600;
	}
`;

export const FormContainer = styled.form`
	margin-block: 25px 72px;
	display: flex;
	flex-direction: column;
	row-gap: 30px;
`;

export const FormLine = styled.div`
	display: flex;
	align-items: flex-start;
	/* justify-content: space-between; */

	max-width: 1268px;
	width: 100%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	padding: 20px;
	border-radius: 30px;

	span {
		color: red;
	}
`;

export const FormButton = styled.button`
	border: none;
	cursor: pointer;

	width: fit-content;

	margin: 72px auto 234px;
	font-size: 18px;
	font-weight: 700;
	padding: 24px 43px;
	border-radius: 47px;
	background-color: ${(props) => props.theme.colors.primary};
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

	&:disabled {
		background-color: #cbd5e1;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: flex-start;
	column-gap: 10px;
	max-width: 1015px;
	width: 100%;

	margin: 72px auto;

	ul {
		list-style: none;
		position: relative;

		width: 100%;
	}

	li::after {
		content: '';
		position: absolute;
		top: 8px;
		left: -30px;
		width: 20px;
		height: 20px;
		border-radius: 100%;
		background-color: ${(props) => props.theme.colors.primary};
	}

	p {
		font-size: 30px;
		font-weight: 600;
		line-height: 36px;
	}
`;
