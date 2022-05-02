import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const pathImage = `/assets/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={pathImage} className="card-img-top" alt="{id}" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero} </h5>
              <p className="card-text">{id}</p>
            </div>

            {alter_ego !== characters && (
              <p className="card-text text-muted">{characters}</p>
            )}

            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`}>Mas info...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
