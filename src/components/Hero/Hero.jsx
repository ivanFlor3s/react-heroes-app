import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import "./Hero.style.css";

export const HeroScreen = () => {

  //Hook para recuperar el param :id 
  const { id } = useParams();
  const hero = getHeroById(id);
  if(!hero){
   return <Navigate to='/'></Navigate>
  }

  
  return <div>
    <h1>Hero Screen</h1>
    <p>{hero.superhero}</p>
    </div>;
};
