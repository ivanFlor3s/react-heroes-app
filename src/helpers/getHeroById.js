import { heroes } from "../data/heroes"

export const getHeroById = (id='')=>{
    console.log('llamo a getHeroById')
    return heroes.find(h => h.id === id)
}