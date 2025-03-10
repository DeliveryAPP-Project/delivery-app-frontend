import React from "react";
import * as styled from "./Welcome.styles"

export function Welcome() {
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

                    <styled.imageWelcome/>

                </styled.containerSection1>
            </styled.generalContainer>
        </React.Fragment>
    )
}