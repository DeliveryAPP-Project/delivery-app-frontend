import MinusCircle from './icons/MinusCircle';
import PlusCircle from './icons/PlusCircle';
import {
  Button,
  Container,
  ContainerBuy,
  ContainerInfo,
} from './MenuItem.styles';

interface MenuItemProps {
  urlImage: string;
  name: string;
  description: string;
  price: number;
}

export function MenuItem(props: MenuItemProps) {
  const { description, name, price, urlImage } = props;

  return (
    <Container>
      <ContainerInfo>
        <img src={urlImage} alt="hamburguer" />
        <div className="information">
          <strong>{name}</strong>
          <small>{description}...</small>
          <small>Ler mais</small>
        </div>
      </ContainerInfo>
      <ContainerBuy>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </strong>
        <div className="information-buy">
          <small>Quantidade</small>
          <div className="container-buttons">
            <button>
              <MinusCircle />
            </button>
            <strong>1</strong>
            <button>
              <PlusCircle />
            </button>
          </div>
        </div>
        <Button>
          <small>Adicionar ao carrinho</small>
        </Button>
      </ContainerBuy>
    </Container>
  );
}
