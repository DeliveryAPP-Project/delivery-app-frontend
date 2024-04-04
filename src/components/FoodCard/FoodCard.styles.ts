import styled from 'styled-components';

export const Container = styled.div`
	width: 61.8rem;
	height: 24.6rem;

	display: flex;
	align-items: center;

	padding: 2rem;
	column-gap: 3.5rem;

	background-color: white;
	box-shadow: 0px 0px 10px 0px #00000040;
	border-radius: 2rem;
`;

export const Content = styled.div`
	display: flex;
	flex: 1;
	column-gap: 2.3rem;

	height: 100%;
`;

export const Left = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	row-gap: 2rem;

	button {
		border: none;
		background: none;
		text-align: start;

		font-family: ${(props) => props.theme.fonts.body};
		font-size: 2.4rem;
		font-weight: 700;
		color: blue;

		cursor: pointer;
	}
`;

export const Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
`;

export const Title = styled.h3`
	font-size: 2.4rem;
`;

export const Description = styled.p`
	font-size: 2.4rem;
`;

export const Money = styled.span`
	font-size: 2.4rem;
	font-weight: 700;
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

export const ButtonAddCard = styled.button`
	height: 5rem;
	width: 17rem;
	border: none;
	border-radius: 5rem;
	background-color: ${(props) => props.theme.colors.primary};
	font-weight: 700;
	font-family: ${(props) => props.theme.fonts.body};
	padding-inline: 3.6rem;
	padding-block: 0.8rem;
	margin-top: 1.2rem;
	cursor: pointer;
	box-shadow: 0px 4px 4px 0px #00000040;
`;
