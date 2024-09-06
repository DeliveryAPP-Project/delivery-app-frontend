import { Link } from 'react-router-dom';
import styled from 'styled-components';

type IContainer = {
	isOpen: boolean;
};

export const Container = styled.div<IContainer>`
	height: 100%;
	width: 100%;

	position: fixed;
	top: 0;
	left: 0;

	visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

	background-color: rgba(79, 79, 79, 0.7);
`;

export const Content = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	padding: 2rem;
	border-radius: 3rem;
	background-color: ${(props) => props.theme.colors.primary};
	box-shadow: 0 0 1.1rem 0.9rem rgba(0, 0, 0, 0.25);

	max-width: 56rem;

	&::after {
		content: '';
		position: absolute;
		top: 0.9rem;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 2rem;

		background-color: white;

		z-index: 10;
	}
`;

export const ModalFoodContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: relative;

	z-index: 20;
`;

export const ModalFoodCloseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background: none;
	border: none;

	position: absolute;
	top: 0;
	right: -1rem;

	cursor: pointer;

	img {
		width: 2rem;
		height: 2rem;

		pointer-events: none;
	}
`;

export const ModalFoodDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.4rem;

	margin-top: 1.4rem;
	font-size: 2.4rem;
	text-align: center;

	h2 {
		font-weight: 700;
	}
`;

export const ModalInformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: relative;
	padding: 3.2rem 3.2rem 1.2rem;

	z-index: 20;
`;

export const ModalInformationTitle = styled.h2`
	font-size: 4.4rem;
	margin-bottom: 5rem;
	font-weight: 600;
`;

export const ModalInformationSubtitle = styled.h3`
	font-size: 2.4rem;
	text-align: center;
	font-weight: 700;
	margin-bottom: 5rem;
`;

export const ModalInformationDescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 500;
	align-items: center;
	justify-content: center;

	row-gap: 2rem;

	max-width: 40rem;
`;

export const ModalInformationDescription = styled.p`
	font-size: 2.4rem;
	text-align: center;
`;

export const ModalInformationActionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	column-gap: 10rem;
	margin-top: 10rem;
`;

export const ModalInformationActionLink = styled(Link)`
	border-radius: 5rem;

	padding: 2.4rem 2rem;
	font-size: 1.8rem;
	font-weight: 700;

	cursor: pointer;

	background-color: ${(props) => props.theme.colors.primary};
`;

export const ModalInformationActionButton = styled.button`
	background: none;
	border: none;
	border-radius: 5rem;

	padding: 2.4rem 2rem;
	font-size: 1.8rem;
	font-weight: 700;

	cursor: pointer;

	background-color: ${(props) => props.theme.colors.primary};
`;
