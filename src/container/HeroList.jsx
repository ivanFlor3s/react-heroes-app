import { HeroCard } from "../components/Hero/HeroCard"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
        
            {
                heroes.map(heroe =>(
                     <HeroCard key={heroe.id}  {...heroe}>
                       
                    </HeroCard>
                ))
            }
           
        
    </div>
  )
}
