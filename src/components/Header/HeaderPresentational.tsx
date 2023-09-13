import logo from '../../assets/HLogo.png';
import shoppingCart from '../../assets/shopping-cart.png';

import * as styled from './Header.styles';

interface FunctionsDown {
  handleDescendingToTheAboveUs: ()=> void;
  handleGoingDownToTheFooter: ()=> void;
}

export function HeaderPresentational({ handleDescendingToTheAboveUs,  handleGoingDownToTheFooter}: FunctionsDown) {

  return(
    <>
      <styled.HeaderContainer>
        <div>
          <styled.ElipseLogo />
          <styled.Logo ImgUrl={logo}/>
        </div>
        <nav>
          <styled.About onClick={handleDescendingToTheAboveUs}>Sobre</styled.About>
          <styled.Contact onClick={handleGoingDownToTheFooter}>Contato</styled.Contact>
          <styled.Car>
            <styled.ElipseCar>
              <styled.IconCar ImgUrl={shoppingCart}/>
            </styled.ElipseCar>
          </styled.Car>
        </nav>
      </styled.HeaderContainer>
    </>
  );
}
