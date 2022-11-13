// import { heroes } from './data/heroes'

import heroes from "../data/heroes";

// console.log(heroes)



export const getHeroeById = (id) => heroes.find((perro) => perro.id === id);
// console.log(getHeroeById(2))

const getHeroeByOwner = (owner) => heroes.filter((perro) => perro.owner === owner);
// console.log(getHeroeByOwner('Marvel'))