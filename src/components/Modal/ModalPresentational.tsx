import * as Dialog from '@radix-ui/react-dialog';

import * as styled from './Modal.styles';

export function ModalPresentational() {
  return (
    <Dialog.Portal>
      <styled.Overlay />

      <styled.Content>
        <styled.Title>Atenção</styled.Title>
        <styled.TextContent>
          Ainda existem  itens de <br />
          outro estabelecimento no <br />
          seu carrinho. <br /><br />
          É preciso comprar <br />
          em um estabelecimento por vez. <br /><br />
          Você pode voltar e finalizar seu <br />
          pedido no carrinho ou abandonar <br />
          o carrinho para continuar a compra <br />
          neste estabelecimento.
        </styled.TextContent>

        <styled.ButtonsContent>
          <styled.CancelButton>Cancelar pedido</styled.CancelButton>
          <styled.ConcludeButton>Concluir pedido</styled.ConcludeButton>
        </styled.ButtonsContent>
      </styled.Content>
    </Dialog.Portal>
  );
}
