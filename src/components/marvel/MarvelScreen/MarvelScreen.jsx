import './MarvelScreen.style.css';

import {HeroList} from '../../../container/HeroList'


export const MarvelScreen = () => {


  return (
    <>
      <h1>Marvel Screen</h1>

      <HeroList publisher='Marvel Comics'></HeroList>
    </>
  )
};