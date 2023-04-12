import {
  RESET_CHARACTER,
  SEARCH_CHARACTER,
  ADD_LOCATION,
  HANDLE_NUMBER,
  ADD_FAV,
  REMOVE_FAV,
  PREV_PAGE,
  FILTER,
  ORDER,
  RESET,
  ADD_CHARACTERS,
  REMOVE_CHARACTER,
  NEXT_PAGE,
} from "./types";

import axios from 'axios'

export function addLocation(path) {
  return {
    type: ADD_LOCATION,
    payload: path,
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
    payload: num,
  };
}

export function addCharacters(characters) {
  return {
    type: ADD_CHARACTERS,
    payload: characters,
  };
}
export function searchCharacter(character) {
  return {
    type: SEARCH_CHARACTER,
    payload: character,
  };
}

export function removeCharacter(id) {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
}

export function addFav(character) { // *** to route addFav
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/rickandmorty/favorite`, character)
      .then(({ data }) => {
        return dispatch({
          type: ADD_FAV,
          payload: data, // data is array myFavorites
        });
      })
      .catch((error) => error);
  };
}

export function removeFav(id) { // *** to route deleteFav
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/rickandmorty/favorite/${id}`)
      .then(({ data }) => {
        return dispatch({
          type: REMOVE_FAV,
          payload: data, // data is array myFavorites
        });
      })
      .catch((error) => error);
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(order) {
  // A: ascendente o D: descendente
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
export function resetCharacters() {
  return {
    type: RESET_CHARACTER,
  };
}

/*
  filterCards: esta función recibe por parámetro un gender. 
  Debe retornar una action con el type igual a "FILTER" y el payload será igual al parámetro recibido.

orderCards: esta función recibe por parámetro un orden (será: A: ascendente o D: descendente). 
Debe retornar una action con el type igual a "ORDER" y el payload será igual al parámetro recibido.
  */
