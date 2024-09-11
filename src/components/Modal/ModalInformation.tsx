import { useModal } from '../../context/ModalContext';
import * as styled from './Modal.styles';

export function ModalInformation() {
	const { handleClose } = useModal();

	return (
		<styled.ModalInformationContainer>
			<styled.ModalInformationTitle>Atenção</styled.ModalInformationTitle>
			<styled.ModalInformationSubtitle>
				Ainda há itens de outro estabelecimento no seu carrinho.
			</styled.ModalInformationSubtitle>

			<styled.ModalInformationDescription>
				Finalize o pedido atual ou esvazie o carrinho para continuar comprando
				neste novo estabelecimento.
			</styled.ModalInformationDescription>

			<styled.ModalInformationActionContainer>
				<styled.ModalInformationActionButton onClick={handleClose}>
					Cancelar pedido
				</styled.ModalInformationActionButton>
				<styled.ModalInformationActionLink
					to='/conclua-sua-compra'
					onClick={handleClose}
				>
					Concluir pedido
				</styled.ModalInformationActionLink>
			</styled.ModalInformationActionContainer>
		</styled.ModalInformationContainer>
	);
}
