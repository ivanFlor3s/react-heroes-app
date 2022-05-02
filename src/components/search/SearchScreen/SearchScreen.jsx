import "./SearchScreen.style.css";
import { useForm } from "../../../hooks/useForm";
import { getHeroesByName } from "../../../helpers/gerHeroesByName";
import { HeroCard } from "../../Hero/HeroCard";

export const SearchScreen = () => {
  
  

  const [formValues, handleInputChange] = useForm({
    searchText: "",
  });

  const {searchText} = formValues

  const heroesFiltrados = getHeroesByName('Algo')

  const handleSearch = (event) => {
    event.preventDefault()
    console.log(searchText)
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
