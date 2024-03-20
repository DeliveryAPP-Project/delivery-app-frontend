import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import bannerImg from '../../assets/banner-image-purchase-confirmation-page.png';
import charactersImg from '../../assets/characters.svg';
import brandImg from '../../assets/logo.svg';
import Form from '../../components/Form';

import * as styled from './PurchaseConfirmation.styles';

const purchaseConfirmationSchema = z.object({
	fullName: z
		.string()
		.trim()
		.nonempty('Este campo é obrigatório')
		.transform((name) => {
			return name
				.split(' ')
				.map((word) => word)
				.join(' ');
		}),
	phone: z.string().trim().nonempty('Este campo é obrigatório'),
	address: z.string().trim().nonempty('Este campo é obrigatório'),
	number: z.string().trim().nonempty('Este campo é obrigatório'),
	complement: z.string().trim().optional(),
	neighborhood: z.string().trim().nonempty('Este campo é obrigatório'),
	cep: z.string().trim().nonempty('Este campo é obrigatório'),
});

type IPurchaseConfirmation = z.infer<typeof purchaseConfirmationSchema>;

export default function PurchaseConfirmation() {
	const purchaseForm = useForm<IPurchaseConfirmation>({
		resolver: zodResolver(purchaseConfirmationSchema),
	});

	const {
		handleSubmit,
		formState: { errors },
	} = purchaseForm;

	function handlePurchaseConfirmation(data: IPurchaseConfirmation) {
		console.log(data);
	}

	return (
		<styled.Container>
			<styled.Banner src={bannerImg}>
				<img src={brandImg} alt="" />
			</styled.Banner>
			<styled.Content>
				<img src={charactersImg} alt="" />

				<h1>Agora vamos concluir sua compra!</h1>
				<h2>Insira suas informações:</h2>

				<FormProvider {...purchaseForm}>
					<styled.FormContainer
						onSubmit={handleSubmit(handlePurchaseConfirmation)}
					>
						<styled.FormLine>
							<div>
								<Form.Field>
									<Form.Label htmlFor="fullName">Nome completo:</Form.Label>
									<Form.Input name="fullName" inputSize="600px" />
								</Form.Field>
								{errors.fullName && <span>{errors.fullName.message}</span>}
							</div>

							<div>
								<Form.Field>
									<Form.Label htmlFor="phone">Telefone:</Form.Label>
									<Form.Input inputSize="300px" name="phone" />
								</Form.Field>
								{errors.phone && <span>{errors.phone.message}</span>}
							</div>
						</styled.FormLine>

						<styled.FormLine>
							<div>
								<Form.Field>
									<Form.Label htmlFor="address">Endereço:</Form.Label>
									<Form.Input inputSize="400px" name="address" />
								</Form.Field>
								{errors.address && <span>{errors.address.message}</span>}
							</div>

							<div>
								<Form.Field>
									<Form.Label htmlFor="number">Número:</Form.Label>
									<Form.Input inputSize="114px" name="number" />
								</Form.Field>
								{errors.number && <span>{errors.number.message}</span>}
							</div>

							<div>
								<Form.Field>
									<Form.Label htmlFor="complement">Complemento:</Form.Label>
									<Form.Input inputSize="100%" name="complement" />
								</Form.Field>
								{errors.complement && <span>{errors.complement.message}</span>}
							</div>
						</styled.FormLine>

						<styled.FormLine>
							<div>
								<Form.Field>
									<Form.Label htmlFor="neighborhood">Bairro:</Form.Label>
									<Form.Input inputSize="740px" name="neighborhood" />
								</Form.Field>
								{errors.neighborhood && (
									<span>{errors.neighborhood.message}</span>
								)}
							</div>

							<div>
								<Form.Field>
									<Form.Label htmlFor="cep">Cep:</Form.Label>
									<Form.Input inputSize="300px" name="cep" />
								</Form.Field>
								{errors.cep && <span>{errors.cep.message}</span>}
							</div>
						</styled.FormLine>

						<styled.TextContainer>
							<ul>
								<li>
									<p>
                    Ao clicar em Finalizar Pedido, você será redirecionado ao
                    WhatsApp do estabelecimento. Lá você pode realizar o
                    pagamento e acompanhar o status do seu pedido.
									</p>
								</li>
							</ul>
						</styled.TextContainer>

						<styled.FormButton type="submit">
              Finalizar Pedido
						</styled.FormButton>
					</styled.FormContainer>
				</FormProvider>
			</styled.Content>
		</styled.Container>
	);
}

