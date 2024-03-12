import faqImg from '../../assets/faq-asset.svg';
import logoImg from '../../assets/logo.svg';
import Header from '../../components/Header';

import * as styled from './Faq.styles';

export function Faq() {
	return (
		<styled.Container>
			<Header />
			<styled.Content>
				<section>
					<div>
						<img src={logoImg} alt="Logo da HAMPER" />
						<h2>FAQ - PERGUNTAS FREQUENTES</h2>
					</div>
					<img src={faqImg} alt="" />
				</section>

				<styled.FaqSession>
					<ul>
						<li>
							<span>1. Quais são as opções de pagamento disponíveis?</span>
							<p>
                -Aceitamos pagamentos em dinheiro, cartões de crédito e débito.
                Além disso, também oferecemos a opção de pagamento online
                através de aplicativos ou plataformas específicas.
							</p>
						</li>
						<li>
							<span>2. Qual é o tempo médio de entrega?</span>
							<p>
                -O tempo médio de entrega pode variar dependendo da localização
                e do volume atual de pedidos. No entanto, trabalhamos para
                realizar entregas dentro do prazo máximo estipulado, que é
                informado no momento do pedido.
							</p>
						</li>
						<li>
							<span>3. Vocês entregam em toda a região?</span>
							<p>
                -Sim, realizamos entregas na maioria das áreas da cidade/região
                onde estamos localizados. No entanto, algumas áreas mais
                distantes podem ter restrições ou taxas adicionais para entrega.
							</p>
						</li>
						<li>
							<span>4. Como faço para acompanhar meu pedido?</span>
							<p>
                -Após fazer seu pedido conosco, você receberá informações sobre
                o status do seu pedido por meio do número fornecido durante o
                processo de compra. Caso tenha algum problema com o
                acompanhamento do seu pedido, nossa equipe estará disponível
                para ajudar.
							</p>
						</li>
						<li>
							<span>
                5. Posso fazer alterações no meu pedido após finalizá-lo?
							</span>
							<p>
                -Faremos o possível para atender às suas solicitações caso
                deseje fazer alguma alteração no seu pedido antes que ele seja
                preparado e enviado para entrega. Recomendamos entrar em contato
                conosco imediatamente por telefone ou chat online assim que
                perceber a necessidade da mudança.
							</p>
						</li>
						<li>
							<span>
                6. Vocês oferecem opções vegetarianas/veganas/gluten-free/etc.?
							</span>
							<p>
                -Sim! Temos diversas opções adequadas a diferentes preferências
                alimentares e restrições dietéticas. Basta verificar nosso
                cardápio ou entrar em contato para obter mais informações sobre
                as opções disponíveis.
							</p>
						</li>
					</ul>
				</styled.FaqSession>
			</styled.Content>
		</styled.Container>
	);
}
