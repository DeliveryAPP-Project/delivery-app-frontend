import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { CardRegistration,CardMain, Progression, HeaderCardRegistration, Description, FontWeightStep,  } from "./RegistrationCompany.style"


export default function RegistrationCompany(){

    return(<>
        <CardMain>
            <CardRegistration>
              
               <HeaderCardRegistration>
                    <h2 >Cadastre-se!</h2>
                    <Progression>
                        <img  src="src/pages/RegistrationCompany/Property 1=Default.png" alt="barra de progresso" />
                        <Description>
                            <FontWeightStep>Dados da empresa</FontWeightStep>
                            <span>Especificações da empresa</span>
                            <span>Envio de documentos</span>
                            <span>Aguardando aprovação</span>
                            <span className="CompletedSpan">Concluido</span>
                        </Description> 
                    </Progression>

               </HeaderCardRegistration>



                <div>
                    <h3>Vamos começar!</h3>
                    <h4>Digite os dados da empresa.</h4>
                    <p>*Dados obrigatorios</p>

                </div>

                

               
            </CardRegistration>
        </CardMain>
    </>)
}