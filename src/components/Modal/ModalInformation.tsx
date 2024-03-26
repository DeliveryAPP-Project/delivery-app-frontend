import { useModal } from '../../context/ModalContext';
import * as styled from './Modal.styles';

export function ModalInformation() {
	const { handleClose } = useModal();

	return (
		<styled.ModalInformationContainer>
			<styled.ModalInformationTitle>Atenção</styled.ModalInformationTitle>

			<styled.ModalInformationDescriptionContainer>
				<styled.ModalInformationDescription>
					Ainda existem itens de outro estabelecimento no seu carrinho.
				</styled.ModalInformationDescription>
				<styled.ModalInformationDescription>
					É preciso comprarem um estabelecimento por vez.
				</styled.ModalInformationDescription>
				<styled.ModalInformationDescription>
					Você pode voltar e finalizar seu pedido no carrinho ou abandonar o
					carrinho para continuar a compra neste estabelecimento.
				</styled.ModalInformationDescription>
			</styled.ModalInformationDescriptionContainer>

			<styled.ModalInformationActionContainer>
				<styled.ModalInformationActionButton onClick={handleClose}>
					Cancelar pedido
				</styled.ModalInformationActionButton>
				<styled.ModalInformationActionLink to='/conclua-sua-compra' onClick={handleClose}>
					Concluir pedido
				</styled.ModalInformationActionLink>
			</styled.ModalInformationActionContainer>
		</styled.ModalInformationContainer>
	);
}
