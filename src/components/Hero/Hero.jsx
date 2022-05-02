import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import "./Hero.style.css";

export const HeroScreen = () => {
  //Hook para recuperar el param :id
  const { id } = useParams();


  //Navigate para volver atras
  const navigate = useNavigate();
  
  //Consigo info heroe y lo guardo con useMemo
  const hero = useMemo(()=>{
   return getHeroById(id);
  },[id]) 


  if (!hero) {
    return <Navigate to="/"></Navigate>;
  }

  const handleReturn = () => {
    //Vuelvo atras
    navigate(-1);
    
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/${hero.id}.jpg`}
          alt={id}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group ">
          <li className="list-group-item">
            <b>Alter ego: {hero.alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publisher: {hero.publisher}</b>
          </li>
          <li className="list-group-item">
            <b>First appearence: {hero.first_appearance}</b>
          </li>
        </ul>
        <h5 className="mt-4">Characters</h5>
        <p>{hero.characters}</p>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
