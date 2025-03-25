import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import bannerImg from '../../assets/banner-image-purchase-confirmation-page.png';
import charactersImg from '../../assets/characters.svg';
import brandImg from '../../assets/logo.svg';
import Form from '../../components/Form';

import * as styled from './PurchaseConfirmation.styles';
import { useCart } from '../../context/cartContext';
import { api } from '../../service/api';
import { useState } from 'react';

const purchaseConfirmationSchema = z.object({
	client_name: z
		.string()
		.trim()
		.nonempty('Este campo é obrigatório')
		.transform((name) => {
			return name
				.split(' ')
				.map((word) => word)
				.join(' ');
		}),
	client_cellphone: z.string().trim().nonempty('Este campo é obrigatório').regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato inválido. Ex: (11) 91234-5678'),
	client_address: z.string().trim().nonempty('Este campo é obrigatório'),
	client_address_number: z.string().trim().nonempty('Este campo é obrigatório'),
	client_address_complement: z.string().trim().optional(),
	client_address_neighborhood: z
		.string()
		.trim()
		.nonempty('Este campo é obrigatório'),
	client_zip_code: z.string().trim().nonempty('Este campo é obrigatório').regex(/^\d{5}-\d{3}$/, 'Formato inválido. Ex: 12345-678'),
});

type IPurchaseConfirmation = z.infer<typeof purchaseConfirmationSchema>;

export default function PurchaseConfirmation() {
	const { cart } = useCart();
	const [showPix, setShowPix] = useState(false);
	const [showMoney, setShowMoney] = useState(false);
	const [showOption, setShowoption] = useState(true);
	const [showPrice, setShowPrice] = useState(true);
	const [buttonActive, setbuttonActive] = useState(false)
	const [showChange, setShowChange] = useState(false)

	const purchaseForm = useForm<IPurchaseConfirmation>({
		resolver: zodResolver(purchaseConfirmationSchema),
	});

	const {
		handleSubmit,
		formState: { errors },
	} = purchaseForm;

	const handleNewOrderMutation = useMutation({
		mutationFn: async (order: IOrder) => {
			const response = await api.post('/orders/', order);
			return response.data;
		},
	});

	function totalCart() {
		let total = 0;
		cart?.products.map((item) => {
			total += item.value * item.quantity;
		});

		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(total);
	}

	function handleWhatsAppMessage(data: IPurchaseConfirmation) {
		const breakLine = '%0A';

		const products = cart?.products
			.map((product) => {
				return `${breakLine}*Produto nº*: ${product.id}${breakLine}
						*Nome do produto*: ${product.name}${breakLine}
						*Quantidade*: ${product.quantity}${breakLine}
		`;
			})
			.join('');

		const orderMessage = '*Detalhes do pedido:*' + products + `${breakLine}`;

		const clientMessage = `*Detalhes do cliente:*${breakLine}
		*Nome do cliente:* ${data.client_name}${breakLine}
		*Endereço:* ${data.client_address}, nº ${data.client_address_number}${breakLine}
		*Complemento*: ${data.client_address_complement
				? data.client_address_complement
				: 'Sem complemento'
			}${breakLine}
		*Bairro:* ${data.client_address_neighborhood}${breakLine}
		*CEP:* ${data.client_zip_code}${breakLine}
		*Telefone:* ${data.client_cellphone}
	`;

		const total = totalCart();
		const totalMessage = `*Total a pagar:* ${total}${breakLine}${breakLine}`;

		const whatsAppMessage = `${cart.restaurantPhoneNumber}?text=${orderMessage}${totalMessage}${clientMessage}`;

		return whatsAppMessage;
	}

	async function handlePurchaseConfirmation(data: IPurchaseConfirmation) {
		const whatsAppMessage = handleWhatsAppMessage(data);

		const whatsAppLink = `https://wa.me/${whatsAppMessage}`;

		window.open(whatsAppLink);
	}

	function handlePixClick() {
		setShowPix(true)
		setShowMoney(false)
		setShowoption(false)
		setShowPrice(false)
	};

	function handleMoneyClick() {
		setShowMoney(true)
		setShowPrice(false)
		setbuttonActive(true)
	}
	function handleChangeClick() {
		setShowChange(!showChange)
	}

	return (
		<styled.Container>
			<styled.Banner src={bannerImg}>
				<img src={brandImg} alt='' />
			</styled.Banner>
			<styled.Content>
				<img src={charactersImg} alt='' />

				<h1>Agora vamos concluir sua compra!</h1>
				<h2>Insira suas informações:</h2>

				<FormProvider {...purchaseForm}>
					<styled.FormContainer
						onSubmit={handleSubmit(handlePurchaseConfirmation)}
					>
						<styled.FormLine>
							<div>
								<Form.Field>
									<Form.Label htmlFor='client_name'>Nome completo:</Form.Label>
									<Form.Input name='client_name' inputSize='600px' type='text' />
								</Form.Field>
								{errors.client_name && (
									<span>{errors.client_name.message}</span>
								)}
							</div>

							<div>
								<Form.Field>
									<Form.Label htmlFor='client_cellphone'>Telefone:</Form.Label>
									<Form.Input inputSize='300px' name='client_cellphone' type='tel' mask='(99) 99999-9999' />
								</Form.Field>
								{errors.client_cellphone && (
									<span>{errors.client_cellphone.message}</span>
								)}
							</div>
						</styled.FormLine>

						<styled.FormLine>
							<div>
								<Form.Field>
									<Form.Label htmlFor='client_address'>Endereço:</Form.Label>
									<Form.Input inputSize='400px' name='client_address' type='text' />
								</Form.Field>
								{errors.client_address && (
									<span>{errors.client_address.message}</span>
								)}
							</div>

							<div>
								<Form.Field>
									<Form.Label htmlFor='client_address_number' >
										Número:
									</Form.Label>
									<Form.Input inputSize='114px' name='client_address_number' type='number' />
								</Form.Field>
								{errors.client_address_number && (
									<span>{errors.client_address_number.message}</span>
								)}
							</div>

							<div>
								<Form.Field>
									<Form.Label htmlFor='client_address_complement'>
										Complemento:
									</Form.Label>
									<Form.Input
										inputSize='100%'
										name='client_address_complement'
										type='text'
									/>
								</Form.Field>
								{errors.client_address_complement && (
									<span>{errors.client_address_complement.message}</span>
								)}
							</div>
						</styled.FormLine>

						<styled.FormLine>
							<div>
								<Form.Field>
									<Form.Label htmlFor='client_address_neighborhood'>
										Bairro:
									</Form.Label>
									<Form.Input
										inputSize='740px'
										name='client_address_neighborhood'
										type='text'
									/>
								</Form.Field>
								{errors.client_address_neighborhood && (
									<span>{errors.client_address_neighborhood.message}</span>
								)}
							</div>

							<div>
								<Form.Field>
									<Form.Label htmlFor='client_zip_code'>Cep:</Form.Label>
									<Form.Input inputSize='300px' name='client_zip_code' type='text' mask="99999-999" />
								</Form.Field>
								{errors.client_zip_code && (
									<span>{errors.client_zip_code.message}</span>
								)}
							</div>
						</styled.FormLine>

						<styled.TextContainer>
							<p>
								Forma de pagamento
							</p>
						</styled.TextContainer>

						{showOption && (
							<styled.containerButton>
								<styled.buttonOption onClick={handlePixClick} type='button'>
									<styled.textOption>
										Pix
									</styled.textOption>
								</styled.buttonOption>
								<styled.buttonOption2 onClick={handleMoneyClick} className={buttonActive ? 'active' : ''} type='button'>
									<styled.textOption>
										Dinheiro
									</styled.textOption>
								</styled.buttonOption2>
							</styled.containerButton>
						)}

						{showPrice && (<styled.totalvalueContainer>
							<styled.totalValueText>Valor total:  </styled.totalValueText>
							<styled.totalValueText2>R$ 00,00{ }</styled.totalValueText2>
						</styled.totalvalueContainer>)}

						{showMoney && (<styled.paymentMethodMoneyGeneralContainer>
							<styled.paymentMethodMoneyContainer>
								<styled.paymentMethodMoneyCheckbox type='checkbox' onClick={handleChangeClick} />

								<styled.paymentMethodMoneyText >Precisa de troco </styled.paymentMethodMoneyText>

							</styled.paymentMethodMoneyContainer>
							
							{showChange ? (<styled.paymentMethodMoneyInput placeholder='Troco para quanto?' type='number' />) : null }
							
							
							<styled.FormButton
								type='submit'
								disabled={handleNewOrderMutation.isPending}
							>
								{handleNewOrderMutation.isPending
									? 'Enviando Pedido'
									: 'Continuar'}
							</styled.FormButton>
						</styled.paymentMethodMoneyGeneralContainer>)}

						{showPix && (<styled.paymentMethodPixGeneralContainer>
							<styled.paymentMethodPixImg />
							<styled.FormButton
								type='submit'
								disabled={handleNewOrderMutation.isPending}
							>
								{handleNewOrderMutation.isPending
									? 'Enviando Pedido'
									: 'Já fiz o pagamento'}
							</styled.FormButton>
						</styled.paymentMethodPixGeneralContainer>
						)}
					</styled.FormContainer>
				</FormProvider>
			</styled.Content>
		</styled.Container>
	);
}
