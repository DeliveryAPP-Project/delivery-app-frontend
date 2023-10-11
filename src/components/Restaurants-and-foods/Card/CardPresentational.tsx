import ImgEight from '../../../assets/Restaurants-and-foods/PhotoRestaurantEight.png';
import ImgFive from '../../../assets/Restaurants-and-foods/PhotoRestaurantFive.png';
import ImgFour from '../../../assets/Restaurants-and-foods/PhotoRestaurantFour.png';
import ImgOne from '../../../assets/Restaurants-and-foods/PhotoRestaurantOne.png';
import ImgSeven from '../../../assets/Restaurants-and-foods/PhotoRestaurantSeven.png';
import ImgSix from '../../../assets/Restaurants-and-foods/PhotoRestaurantSix.png';
import ImgThree from '../../../assets/Restaurants-and-foods/PhotoRestaurantThree.png';
import ImgTwo from '../../../assets/Restaurants-and-foods/PhotoRestaurantTwo.png';
import Star from '../../../assets/Restaurants-and-foods/Star.png';
import ImgCard from '../../../assets/Restaurants-and-foods/variedade-de-salada-saudavel-com-espaco-de-copia.png';
import Input from '../Input/index';
import Restaurants from '../Restaurants/index';
import { ContainerRestaurantsAndFoods } from '../Restaurants/Restaurants.styles';

import * as styled from './Card.styles';

export function CardPresentational(){
  return(
    <div>
      <styled.CardContainer>
        <styled.CardContent>

          <styled.CardImage ImgUrl={ImgCard}>
            <styled.TitleCard>
              <span>Restaurantes e foods</span>
            </styled.TitleCard>

            <styled.SubTitleCard>
              <span>Conheça os nossos <br/> restaurantes e foods parceiros!</span>
            </styled.SubTitleCard>
          </styled.CardImage>

          <Input />
          <ContainerRestaurantsAndFoods>
            <Restaurants ImgUrl={ImgOne} Star={Star}/>
            <Restaurants ImgUrl={ImgTwo} Star={Star}/>
            <Restaurants ImgUrl={ImgThree} Star={Star}/>
            <Restaurants ImgUrl={ImgFour} Star={Star}/>
            <Restaurants ImgUrl={ImgFive} Star={Star}/>
            <Restaurants ImgUrl={ImgSix} Star={Star}/>
            <Restaurants ImgUrl={ImgSeven} Star={Star}/>
            <Restaurants ImgUrl={ImgEight} Star={Star}/>
          </ContainerRestaurantsAndFoods>

        </styled.CardContent>
      </styled.CardContainer>
    </div>
  );
}
