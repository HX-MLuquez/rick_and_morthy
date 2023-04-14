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

import axios from "axios";

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

export function addFav(character) {
  return async function (dispatch) {
    try {
      const {data} = await axios.post(
        `http://localhost:3001/rickandmorty/favorite`,
        character
      );
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log("addFav not found", error);
    }
  };
  // return {
  //   type: ADD_FAV,
  //   payload: character,
  // };
}

export function removeFav(id) {
  return async function (dispatch) {
    try {
      const {data} = await axios.delete(
        `http://localhost:3001/rickandmorty/favorite/${id}`
      );
      return dispatch({
        type: REMOVE_FAV,
        payload: data, // myFavorites
      });
    } catch (error) {
      console.log("removeFav not found", error);
    }
    // return {
    //   type: REMOVE_FAV,
    //   payload: id,
    // };
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
