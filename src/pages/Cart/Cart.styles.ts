import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImageBanner = styled.img`
	max-height: 31.2rem;
	max-width: 144rem;
	width: 100%;
	height: 100%;

	margin-inline: auto;

	object-fit: cover;
`;

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;

	max-width: 80rem;
	min-height: 60rem;
	width: 100%;
	margin: 12.2rem auto 22.4rem;
	border-radius: 3rem;
	padding: 5rem;
	background-color: ${({ theme }) => theme.colors.primary};
	z-index: 0;

	&::before {
		content: '';
		position: absolute;
		top: 1rem;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 2.5rem;
		background-color: white;
		box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
	}
`;

export const CartIconContainer = styled.div`
	position: absolute;
	top: 0;
	left: 50%;

	transform: translate(-50%, calc(-50% + 0.5rem));

	padding: 2.2rem;
	border-radius: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.colors.primary};
`;

export const CartIcon = styled.img`
	width: 3rem;
`;

export const CartContainerDescription = styled.div`
	margin-top: 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 3rem;
`;

export const CartContainerTitle = styled.h2`
	font-size: 3.2rem;
	font-weight: 700;
	z-index: 0;
`;

export const CartCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 3rem;
`;

export const AddMoreProductsContainer = styled.div`
	z-index: 0;
	width: 100%;

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 6rem;

		row-gap: 1rem;

		img {
			width: 6rem;
			height: 6rem;
		}

		span {
			font-weight: 700;
			font-size: 1.8rem;
		}
	}
`;

export const Divide = styled.div`
	height: 0.1rem;
	width: 100%;
	background-color: #737373;
	margin-top: 5rem;
`;

export const CartTotalValue = styled.div`
	display: flex;
	align-self: flex-end;
	z-index: 0;

	margin-block: 4rem;
	font-size: 2rem;
	font-weight: 700;
`;

export const ActionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 0;

	width: 100%;

	a {
		background-color: ${({ theme }) => theme.colors.primary};
		width: 20rem;
		height: 5rem;

		border-radius: 4rem;
		box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.4);

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 2rem;
		font-weight: 700;
	}
`;

export const CartEmptyContainer = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	z-index: 0;

	img {
		margin-bottom: 4rem;
	}

	a {
		background-color: ${({ theme }) => theme.colors.primary};
		width: 20rem;
		height: 5rem;

		border-radius: 4rem;
		box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.4);

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 2rem;
		font-weight: 700;

		margin-bottom: 10rem;
	}
`;

export const CartEmptyTitle = styled.h3`
	font-size: 3rem;
	font-weight: 700;

	margin-block: 10rem 5rem;
`;
