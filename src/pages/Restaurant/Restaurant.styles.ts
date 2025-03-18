import { ComponentProps } from 'react';
import styled from 'styled-components';

type IBannerImg = ComponentProps<'div'> & {
	src: string;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2.8rem;
	margin-bottom: 30px;
`;

export const BannerImg = styled.div<IBannerImg>`
	background-image: url(${(props) => props.src});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	margin-inline: auto;
	height: 31rem;
	width: 100%;
	max-width: 144rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding-inline: 5.6rem;
`;

export const RestaurantInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	row-gap: 0.6rem;
`;

export const RestaurantTitleContainer = styled.div`
	display: flex;
	align-items: center;

	position: relative;
	margin-top: 1rem;
`;

export const RestaurantTitle = styled.h1`
	font-weight: 700;
`;

export const RestaurantScore = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.4rem;

	position: absolute;
	right: -5.6rem;

	img {
		width: 2rem;
		height: 2rem;
	}
`;

export const RestaurantDescription = styled.p``;

export const Separator = styled.div`
	background-color: gray;
	height: 0.1rem;
	width: 100%;

	padding-inline: 5.6rem;
	margin-block: 5rem;
`;

export const FoodsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 6.6rem;
	row-gap: 4rem;
	max-width: 144rem;
`;
