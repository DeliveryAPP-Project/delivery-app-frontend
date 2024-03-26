import { useModal } from '../../context/ModalContext';
import * as styled from './Modal.styles';
import { ModalFood } from './ModalFood';
import { ModalInformation } from './ModalInformation';

export function Modal() {
	const { isOpen, handleClose, type, product } = useModal();

	return (
		<styled.Container isOpen={isOpen}>
			<styled.Content>
				{type === 'product' && <ModalFood product={product!} handleClose={handleClose}/>}
				{type === 'information' && <ModalInformation />}
			</styled.Content>
		</styled.Container>
	);
}