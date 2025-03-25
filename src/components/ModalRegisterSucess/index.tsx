import * as styled from './ModalRegisterSucess';
import iconSucess from "../../assets/sucessIcon.png";
import close from "../../assets/x.png";
import { ModalRegisterProps } from '../../types/modal';

export default function ModalRegisterSucess({ isOpen, onClose }: ModalRegisterProps) {
    return (
        isOpen && (
            <styled.Container>
                <styled.ButtonClose onClick={onClose}>
                    <styled.Img src={close} alt="Fechar modal" />
                </styled.ButtonClose>
                <styled.Img src={iconSucess} alt="Icone sucesso" />
                <styled.Msg>
                    E-mail cadastrado com sucesso.
                </styled.Msg>

                <styled.Text>
                    Obrigado pelo seu interesse em se tornar parceiro da Hamper.
                    Em breve, quando a plataforma estiver disponível, você será avisado por e-mail.
                </styled.Text>
            </styled.Container>
        )
    );
}