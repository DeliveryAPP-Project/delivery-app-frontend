import { useState } from 'react';
import * as styled from './MoralRegister.styles';
import close from "../../assets/x.png";

interface ModalRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalRegister({ isOpen, onClose }: ModalRegisterProps) {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);

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
                <styled.container>
                    <styled.buttonClose onClick={onClose}>
                        <styled.img src={close} alt="Fechar modal" />
                    </styled.buttonClose>

                    <styled.label>
                        E-mail *
                    </styled.label>

                    <styled.input
                        type="email"
                        placeholder="Exemplo@e-mail.com"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />

                    {!isEmailValid && (
                        <styled.span style={{ color: 'silver' }}>
                            *E-mail Obrigatório
                        </styled.span>
                    )}

                    <styled.button
                        type="submit"
                        filled={isEmailValid}
                        disabled={!isEmailValid}
                    >
                        Cadastrar
                    </styled.button>
                </styled.container>
            )}
        </>
    );
}
