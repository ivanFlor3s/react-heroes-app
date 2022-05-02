import "./SearchScreen.style.css";
import { useForm } from "../../../hooks/useForm";
import { getHeroesByName } from "../../../helpers/gerHeroesByName";
import { HeroCard } from "../../Hero/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'
import { useMemo, useState } from "react";

export const SearchScreen = () => {
  
  const navigate = useNavigate()
  const location = useLocation()

  // const [heroesFilt, setHeroesFilt] = useState([])

  const {q = ''} = queryString.parse(location.search)

  

  const [formValues, handleInputChange] = useForm({
    searchText: q ,
  });

  const {searchText} = formValues

  const heroesFiltrados = useMemo(()=>{
   return getHeroesByName(q)
  },[q]) 

  const handleSearch = (event) => {
    event.preventDefault()
    navigate(`?q=${searchText}`)
  };

  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className=" form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange = {handleInputChange}
            />
            <button className="btn btn-outline-primary mt-2" type="submit">
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '') ? 
              <div className="alert alert-info">Buscar un heroe</div>
                : 
              ( heroesFiltrados.length === 0 ) 
              && <div className="alert alert-danger">No hay resultados: {q}</div>

          }
          <div className="list-scrollable">
          {
            heroesFiltrados.map(hero => {
              return <HeroCard key={hero.id} {...hero}></HeroCard>
            })
          }

          </div>
        </div>
      </div>
    </>
  );
};
