import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  RESET,
  ADD_CHARACTERS,
  REMOVE_CHARACTER,
  NEXT_PAGE,
  PREV_PAGE,
  HANDLE_NUMBER,
  ADD_LOCATION,
  SEARCH_CHARACTER,
  RESET_CHARACTER,
} from "./actions/types";
const initialState = {
  location: [],
  numPage: 1,
  charactersOrigin: [],
  characters: [],
  data: [],
  myFavorites: [],
  myFavoritesOrigin: [], // solo lo cambian el add y el remove
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_LOCATION:
      return {
        ...state,
        location: [...state.location, payload],
      };
    case SEARCH_CHARACTER:
      return {
        ...state,
        characters: [payload],
      };
    case HANDLE_NUMBER:
      return {
        ...state,
        numPage: payload,
      };
    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };

    case ADD_CHARACTERS:
      if (Array.isArray(payload)) {
        return {
          ...state,
          charactersOrigin: [...payload],
          characters: [...payload],
        };
      } // |*|*|*| CCC |*|*|*|
      // return {
      //   ...state,
      //   characters: [payload, ...state.characters],
      // };
      break;
    case RESET_CHARACTER:
      return {
        ...state,
        characters: [...state.charactersOrigin],
      };

    case REMOVE_CHARACTER:
      const newCharacter = state.myFavoritesOrigin.filter(
        (ch) => ch.id !== payload
      );
      return {
        ...state,
        myFavorites: newCharacter,
        myFavoritesOrigin: newCharacter,
      };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        myFavoritesOrigin: payload,
      };
    case REMOVE_FAV:
      // const newFavorites = state.myFavoritesOrigin.filter(
      //   (ch) => ch.id !== payload
      // );
      return {
        ...state,
        myFavorites: payload,
        myFavoritesOrigin: payload,
      };
    case FILTER:
      const newFilter = state.myFavoritesOrigin.filter(
        (ch) => ch.gender === payload
      );
      return {
        ...state,
        myFavorites: newFilter,
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };
    case ORDER:
      const newOrder = state.myFavoritesOrigin.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: newOrder,
      };

    default:
      return state;
  }
}
