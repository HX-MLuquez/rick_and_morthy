import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./types";

export function addFav(character) {
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(order) { // A: ascendente o D: descendente
  return {
    type: ORDER,
    payload: order,
  };
}
export function reset() { 
  return {
    type: RESET,
  };
}

/*
  filterCards: esta función recibe por parámetro un gender. 
  Debe retornar una action con el type igual a "FILTER" y el payload será igual al parámetro recibido.

orderCards: esta función recibe por parámetro un orden (será: A: ascendente o D: descendente). 
Debe retornar una action con el type igual a "ORDER" y el payload será igual al parámetro recibido.
  */
