import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type IContent = ComponentProps<'div'> & {
	src: string;
};

export const Container = styled.section`
	height: 63.7rem;
	width: 100%;

	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.blackFont};
`;

export const Content = styled.div<IContent>`
	background-image: url(${(props) => props.src});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 63.7rem;
	max-width: 144rem;
	width: 100%;
	margin-inline: auto;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 11rem;

	height: 100%;
	max-width: 83rem;
	width: 100%;
	padding-inline: 8rem;

	img {
		width: 25.3rem;
		margin-bottom: 3rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 9rem;
		font-weight: 700;
		max-width: 60rem;
	}
`;

type IDescription = {
	size?: 'small';
};

export const Description = styled.p<IDescription>`
	font-size: 3rem;

	${(props) =>
		props.size === 'small' &&
		`
    width: 46rem;
  `}
`;

export const ButtonLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 5.3rem;

	font-size: 2rem;
	font-weight: 700;
	background-color: ${(props) => props.theme.colors.primary};

	width: 24.8rem;
	height: 7.5rem;
	border-radius: 2rem;
	box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

	cursor: pointer;
`;
