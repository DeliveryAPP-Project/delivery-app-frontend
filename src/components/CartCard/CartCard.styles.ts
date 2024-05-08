import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 1.2rem 3.4rem 1.2rem 2rem;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
	border-radius: 2rem;

	max-width: 61.8rem;
	width: 100%;

	position: relative;
	column-gap: 3.3rem;
`;

export const CardButtonClose = styled.button`
	position: absolute;
	top: 1rem;
	right: 1.2rem;

	border: none;
	background: none;

	cursor: pointer;

	img {
		width: 1.8rem;
	}
`;

export const CardImageContainer = styled.div`
	width: 14rem;
	height: 14rem;
	overflow: hidden;

	border-radius: 100%;
`;
export const CardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const CardDescriptionContainer = styled.div`
	max-width: 14rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		gap: 0.8rem;

		button {
			border: none;
			background: none;
			font-size: 2rem;
			color: blue;
			font-weight: 700;
			cursor: pointer;
		}
	}
`;

export const CardTitle = styled.h3`
	font-weight: 700;
`;
export const CardDescription = styled.p`
	font-weight: 600;
`;

export const CardValueContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 5rem;

	font-weight: 700;
	font-size: 1.8rem;
`;

export const ActionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;

	margin-top: auto;
`;

export const ActionContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	column-gap: 1.2rem;
	margin-top: 0.4rem;
`;

export const ButtonAction = styled.button`
	background: none;
	border: none;
	display: flex;

	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
