import {ADD_LOCATION,HANDLE_NUMBER, ADD_FAV, REMOVE_FAV,PREV_PAGE, FILTER, ORDER, RESET, ADD_CHARACTER, REMOVE_CHARACTER, NEXT_PAGE } from "./types";

export function addLocation(path) {
  return {
    type: ADD_LOCATION,
    payload:path
  };
}



export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}



export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}
export function handleNumber(num) {
  return {
    type: HANDLE_NUMBER,
    payload: num
  };
}

export function addCharacter(character) {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
}

export function removeCharacter(id) {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
}


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
