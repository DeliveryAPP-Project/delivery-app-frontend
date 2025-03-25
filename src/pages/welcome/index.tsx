import React, { useState } from "react";
import * as styled from "./Welcome.styles";
import ModalRegister from "../../components/ModalRegister";

export function Welcome() {
    const [modal, setModal] = useState(false)

    function handleModal() {
        setModal(!modal)
    }

    return (
        <React.Fragment>
            <styled.generalContainer>
                <styled.containerSection1>
                    <styled.containerContent>
                        <styled.containerText>
                            <styled.titleWelcome>
                                Seja bem-vindo! Venha fazer parte do time HAMPER!
                            </styled.titleWelcome>
                            <styled.text1Welcome>
                                Entre na HAMPER e tenha um modelo financeiro amigável, controle total dos seus pedidos, ferramentas de crescimento e fidelização.
                            </styled.text1Welcome>
                        </styled.containerText>
                    </styled.containerContent>
                    <styled.imageWelcome />
                </styled.containerSection1>

                <styled.containerSection2>
                    <styled.containerContentSection2>
                        <styled.titleSection2>
                            Conheça as vantagens de ser parceiro da HAMPER!
                        </styled.titleSection2>
                        <styled.buttonCadrastNow onClick={handleModal}>
                            Cadastrar agora
                        </styled.buttonCadrastNow>
                    </styled.containerContentSection2>

                    <styled.container2ContentSection2>
                        <styled.textSection2>
                            O Hamper representa <span>a nova era do delivery</span>, onde <span>estabelecimentos locais</span> têm controle total da sua operação. Ao eliminar intermediários e permitir que negócios <span>vendam diretamente aos clientes</span>, garantimos uma experiência mais <span>rentável, eficiente e flexível</span> para todos os envolvidos.
                        </styled.textSection2>
                        <styled.textSection2>
                            Com um modelo <span>sem comissão, pagamento direto e fidelização inteligente</span>, o Hamper tem tudo para transformar <span>não apenas o delivery de restaurantes, mas também de lojas de conveniência, mercados e distribuidores.</span>
                        </styled.textSection2>
                    </styled.container2ContentSection2>
                </styled.containerSection2>

                <styled.containerSection3>
                    <styled.containerCard>
                        <styled.Card>
                            <styled.circle />
                            <styled.titleSection3>
                                Modelo financeiro amigável
                            </styled.titleSection3>
                            <styled.textSection3>✅ Zero comissão sobre pedidos.</styled.textSection3>
                            <styled.textSection3>✅ Modelo de assinatura acessível.</styled.textSection3>
                            <styled.textSection3>✅ Pagamentos diretos e rápidos.</styled.textSection3>
                        </styled.Card>

                        <styled.Card>
                            <styled.circle />
                            <styled.titleSection3>
                                Controle total dos seus pedidos
                            </styled.titleSection3>
                            <styled.textSection3>✅ Integração com WhatsApp, Instagram e Google Maps.</styled.textSection3>
                            <styled.textSection3>✅ O estabelecimento mantém os dados dos clientes.</styled.textSection3>
                            <styled.textSection3>✅ Gestão direta de pedidos e pagamentos.</styled.textSection3>
                        </styled.Card>

                        <styled.Card>
                            <styled.circle />
                            <styled.title2Section3>
                                Ferramentas de crescimento e fidelização
                            </styled.title2Section3>
                            <styled.textSection3>✅ Cashback e cupons gerenciados pelo restaurante.</styled.textSection3>
                            <styled.textSection3>✅ Relatórios inteligentes sobre pedidos e clientes.</styled.textSection3>
                            <styled.textSection3>✅ Programa de indicações para atrair novos clientes.</styled.textSection3>
                        </styled.Card>
                    </styled.containerCard>
                </styled.containerSection3>
                <styled.containerSection4>
                    <styled.containerContentSection4>
                        <styled.titleSection4>
                            Cadastre seu estabelecimento aqui!
                        </styled.titleSection4>
                        <styled.buttonCadrastNow2>
                        Cadastrar agora
                        </styled.buttonCadrastNow2>
                    </styled.containerContentSection4>
                </styled.containerSection4>

                <ModalRegister isOpen={modal} onClose={handleModal} />

            </styled.generalContainer>
        </React.Fragment>
    );
}
