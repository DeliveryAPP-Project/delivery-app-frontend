import * as styled from './ModalRegisterSucess';
import iconSucess from "../../assets/sucessIcon.png"

export default function ModalRegisterSucess() {
    return (
        <styled.Container>
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
}