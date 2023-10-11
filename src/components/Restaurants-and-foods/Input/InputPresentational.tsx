import SearchImg from '../../../assets/Restaurants-and-foods/Search.png';

import * as styled from './Input.styles';

export function InputPresentational(){
  return(
    <div>
      <styled.SearchForRestaurants placeholder='Buscar restaurantes'/>
      <styled.SearchMagnifyingGlass ImgUrl={SearchImg}/>
    </div>

  );
}
