import { useState } from 'react';
import * as styled from './MoralRegister.styles';
import close from "../../assets/x.png";

interface ModalRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalRegister({ isOpen, onClose }: ModalRegisterProps) {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsEmailValid(validateEmail(emailValue));
    };

    return (
        <>
            {isOpen && (
                <styled.Container>
                    <styled.ButtonClose onClick={onClose}>
                        <styled.Img src={close} alt="Fechar modal" />
                    </styled.ButtonClose>

                    <styled.Label>
                        E-mail *
                    </styled.Label>

                    <styled.Input
                        type="email"
                        placeholder="Exemplo@e-mail.com"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />

                    {!isEmailValid && (
                        <styled.Span style={{ color: 'silver' }}>
                            *E-mail Obrigatório
                        </styled.Span>
                    )}

                    <styled.Button
                        type="submit"
                        filled={isEmailValid}
                        disabled={!isEmailValid}
                    >
                        Cadastrar
                    </styled.Button>
                </styled.Container>
            )}
        </>
    );
}
