import React from "react";
import { ContainerFooter, ContainerTextFooter, TextFooter, TextHamper } from "./footer.styles";
import { Link } from "react-router-dom";

interface PropsMarginFooter {
    Marginfooter: number;
}

const Footer: React.FC<PropsMarginFooter> = ({ Marginfooter }) => {
    return (
        <React.Fragment>
            <ContainerFooter marginFooter={Marginfooter}>
                <TextHamper>
                    HAMPER
                </TextHamper>
                <ContainerTextFooter>
                    <TextFooter>
                        CNPJ:XXXXXXXXXXXXX
                    </TextFooter>
                    <TextFooter>
                        Termos e Condições / Política de Privacidade
                    </TextFooter>
                    <TextFooter>
                        <Link to="/faq">FAQ</Link>
                    </TextFooter>
                    <TextFooter>
                        E-mail: sitedelivery@gmail.com
                    </TextFooter>
                </ContainerTextFooter>
            </ContainerFooter >
        </React.Fragment>
    )
}

export default Footer;