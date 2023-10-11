import { CardProps, RestaurantsPresentational } from './RestaurantsPresentational';

export function Restaurants({ ImgUrl, Star }: CardProps){
  return(
    <RestaurantsPresentational ImgUrl={ImgUrl} Star={Star}/>
  );
}
