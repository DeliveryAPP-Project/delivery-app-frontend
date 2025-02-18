import { ComponentProps } from 'react';
import styled from 'styled-components';
import pix from '../../assets/pix.png'
import dinheiro from '../../assets/dinheiro.png'

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
		margin-bottom: 50px;
	}
`;

export const FormContainer = styled.form`
	/* margin-block: 25px 72px; */
	margin-bottom: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
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

	width: 1016px;
	height: 72px;
	
	margin-top: 60px;
	font-size: 30px;
	font-weight: 400;
	padding: 24px 43px;
	border-radius: 10px;
	background-color: ${(props) => props.theme.colors.primary};
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);



	display: flex;
	justify-content: center;
	align-items: center;

	&:disabled {
		background-color: #cbd5e1;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 15px;
	margin-bottom: 5px;
	/* border: solid 1px red; */
	p {
		font-size: 32px;
		font-weight: 600;
		line-height: 36px;
	}
`;

export const containerButton = styled.div`
/* border: solid 1px rebeccapurple; */
width: 100%;
height: 180px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`;

export const buttonOption = styled.button`
	width: 502px;
	height: 163px;
	border: solid 1px #737373;
	border-radius: 10px;
	margin-bottom: 30px;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #FFF;
	background-image: url(${pix});
	background-position: center 25px;
	background-repeat: no-repeat;
	background-size: 50px 50px;
	cursor: pointer;
	&:hover{
		background-color:rgba(250, 166, 19, 0.16);
		border: solid 1px #FAA613;
		;
	}
`;

export const buttonOption2 = styled(buttonOption)`
	background-image: url(${dinheiro});
`;

export const textOption = styled.p`
	font-size: 32px;
	font-weight: 400;
	margin-top: 40px;
`;

export const totalvalueContainer = styled.div`
	/* border: solid 1px black; */
	width: 80%;
	height: 50px;
	display: flex;
	align-items: baseline;
	margin-top: 20px;
	margin-bottom: 50px;
	

`;
export const totalValueText = styled.p`
	font-size: 36px;
	font-weight: 400;
	margin-left: 30px;
	
`;
export const totalValueText2 = styled(totalValueText)`
	font-weight: 600;
	margin: 6px;
`;
export const paymentMethodMoneyGeneralContainer = styled.div`
	/* border: solid 1px blue; */
	width: 76%;
	height: 250px;
	margin-top: 20px;
`;

export const paymentMethodMoneyContainer = styled.div`
	display: flex;
	align-items: center;
	/* border: 1px solid blue; */
	margin-bottom: 20px;
	gap: 10px;
`;

export const paymentMethodMoneyCheckbox = styled.input`
	width: 22px;
	height: 22px;
	border:solid 2px #737373;
`;

export const paymentMethodMoneyText = styled.p`
	width: 200px;
	height: 32px;
	font-size: 24px;
	font-weight: 400;
	/* border: solid 2px red; */
`;

export const paymentMethodMoneyInput = styled.input`
	border-style: none;
	border-bottom: 1px solid #000000;
	width: 396px;
	height: 40px;
	

	font-size: 24px;
	font-weight: 400;
`;