import { heroes } from "../data/heroes"

export const getHeroesByName = (name='') =>{
    name = name.toLocaleLowerCase()
    // return heroes.filter(h => h.superhero.toLocaleLowerCase().includes(name))
    return heroes
}