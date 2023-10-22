import cartIcon from '../../assets/cartIcon.svg';
import pluscircle from '../../assets/plus-circle.svg';
import SaladaDeFrutas from '../../assets/salada-de-frutas-fundo-branco.png';
import Header from '../../components/Header';
import MenuItem from '../../components/MenuItem';

import {
  Button,
  ContainerCart,
  ContainerCartItems,
  ContentCart,
  ContentCartItems,
  Footer,
  Page,
} from './CartPage.styles';

export default function CartPage() {
  const cartItems = [
    {
      name: 'Hamburguer artesanal',
      description: 'Blend bovino',
      price: 30,
      image: 'https://picsum.photos/200/300',
    },
    {
      name: 'Hamburguer artesanal',
      description: 'Blend bovino',
      price: 30,
      image: 'https://picsum.photos/200/301',
    },
  ];

  return (
    <Page>
      <div>
        <Header />

        <img src={SaladaDeFrutas} alt={'banner-salada-de-frutas'} />
      </div>

      <ContainerCart>
        <ContentCart>
          {cartItems ? (
            <ContainerCartItems>
              <h2>Carrinho</h2>
              <ContentCartItems>
                {cartItems.map((cartItem) => (
                  <MenuItem
                    description={cartItem.description}
                    name={cartItem.name}
                    price={cartItem.price}
                    urlImage={cartItem.image}
                    isCart
                    key={Math.random()}
                  />
                ))}
              </ContentCartItems>
              <button>
                <img src={pluscircle} alt="add-itens" />
                Adicionar itens
              </button>
            </ContainerCartItems>
          ) : (
            <>
              <h1>Seu carrinho está vazio</h1>
              <img src={cartIcon} alt="cart-icon" />
              <Button>Voltar</Button>
            </>
          )}
          <hr />
          {cartItems.length > 0 && (
            <Footer>
              <strong>
                Total da compra:{' '}
                {cartItems.reduce((acc, item) => {
                  return item.price + acc;
                }, 0)}
              </strong>
              <div>
                <Button>Voltar</Button>
                <Button>Concluir pedido</Button>
              </div>
            </Footer>
          )}
        </ContentCart>
      </ContainerCart>
    </Page>
  );
}
