import styled from "styled-components";

interface ButtonProps {
    filled: boolean;
}

export const Container = styled.div`
    position: relative;
    position: fixed;
    width: 90vw;
    max-width: 600px;
    height: 258px;
    border-top: 10px solid #FAA613;
    box-shadow: 1px 1px 10px 0px silver;
    border-radius: 25.93px;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 32px;
`;

export const ButtonClose = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 30px;
    margin-right: 30px;
    cursor: pointer;
    :hover {
        background-color: red;
    }
`;

export const Img = styled.img`
    width: 16px;
    height: 16px;
`;

export const Label = styled.label`
    font-weight: 400;
    font-size: 18px;
    margin-left: 16px;
`;

export const Input = styled.input`
    margin-top: 7px;
    width: 415px;
    padding: 10px;
    height: 56px;
    display: flex;
    border-radius: 4px;
    border: silver 1px solid;

`;

export const Span = styled.span`
    color: red; /* Tornando a mensagem de erro mais visível */
    font-weight: 400;
    font-size: 12px;
`;

export const Button = styled.button<ButtonProps>`
    width: 100%;
    height: 56px;
    border-radius: 50px;
    border: none;
    background-color: ${({ filled }) => (filled ? "#FAA613" : "#F7E2BE")};
    font-size: 24px;
    font-weight: 700;
    color: ${({ filled }) => (filled ? "#000" : "#00000080")};
    margin-top: 20px;
    cursor: ${({ filled }) => (filled ? "pointer" : "not-allowed")}; /* Alterando cursor quando desabilitado */
    transition: background-color 0.3s, color 0.3s;
    
    :focus {
        outline: none; /* Remove o contorno padrão ao focar, mas você pode customizar se quiser */
        box-shadow: 0 0 0 3px rgba(250, 166, 19, 0.6); /* Adicionando um foco visível */
    }
`;
