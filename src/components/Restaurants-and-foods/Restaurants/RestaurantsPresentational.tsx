import * as styled from './Restaurants.styles';

export interface CardProps {
  ImgUrl :string;
  Star: string;
}

export function RestaurantsPresentational({ ImgUrl, Star }: CardProps){
  return(
    <styled.CardsRestaurantsAndFoods>
      <styled.PhotoOfTheRestaurant ImgUrl={ImgUrl}/>
      <styled.RestaurantInformation>
        <styled.DivSeparation>
          <styled.TitleRestaurant>
            Chefe Logo
          </styled.TitleRestaurant>
          <styled.TextRestaurant>Parque <br/> Anhangabaú <br/> Centro São <br/> Paulo/SP</styled.TextRestaurant>
        </styled.DivSeparation>
        <styled.DivSeparation>
          <styled.EvaluationContainer>
            <styled.Star ImgUrl={Star}/>
            <styled.Evaluation>
              4.5
            </styled.Evaluation>
          </styled.EvaluationContainer>
          <styled.ViewButton>Ver</styled.ViewButton>
        </styled.DivSeparation>
      </styled.RestaurantInformation>
    </styled.CardsRestaurantsAndFoods>
  );
}
