import { Action, ActionType } from "./actions";
import { characterType } from "../types";

export interface ReducerState {
  AllCharacters: characterType[];
  FavoriteCharacters: characterType[];
  currentPage: number;
  nextPage: number;
  prevPage: number;
  nbPages: number;
  searchQuery?: string;
  statusQuery?: string;
  genderQuery?: string;
}

export const contextReducer = (state: ReducerState, action: Action): ReducerState => {
  switch (action.type) {
    //-------------------------------------------------------------------------------------
    case ActionType.SET_CHARACTERS:
      // console.log("REDUCER SET_CHARACTERS", action);
      // console.log("REDUCER SET_CHARACTERS", state);
      return {
        ...state,
        AllCharacters: [...action.payload.AllCharacters],
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
        nbPages: action.payload.nbPages,
      };
    //-------------------------------------------------------------------------------------
    case ActionType.HANDLE_PAGE:
      // console.log("Reducer HANDLE_PAGE", action);
      if (action.payload === "inc") {
        let nextPage = state.currentPage + 1;
        if (nextPage > state.nbPages) {
          nextPage = 1;
        }
        return { ...state, currentPage: nextPage };
      } else if (action.payload === "dec") {
        let prevPage = state.currentPage - 1;
        if (prevPage < 1) {
          prevPage = state.nbPages;
        }
        return { ...state, currentPage: prevPage };
      }
      return { ...state };
    //----------------------------------------------------------------------------

    case ActionType.HANDLE_SEARCH:
      // console.log("Reducer HANDLE_SEARCH", action);
      // console.log("Reducer HANDLE_SEARCH", state);
      return {
        ...state,
        searchQuery: action.payload.query,
        currentPage: action.payload.query === state.searchQuery ? state.currentPage : 1,
      };
    //============================================================
    case ActionType.HANDLE_STATUS:
      // console.log("Reducer HANDLE_STATUS", action.payload.query);
      return {
        ...state,
        statusQuery: action.payload.query,
      };
    //===================================================================================
    case ActionType.HANDLE_GENDER:
      // console.log("Reducer HANDLE_GENDER", action.payload.query);
      return {
        ...state,
        genderQuery: action.payload.query,
      };
    //===================================================================================
    case ActionType.SET_FAVORITS:
      // console.log("Reducer SET_FAVORITS", action.payload);
      const existingFavoritChar = state.FavoriteCharacters.find((Char) => Char.id === action.payload.id);

      if (!existingFavoritChar) {
        //...............................................................................
        //add array to localStorage
        let arr = [...state.FavoriteCharacters, action.payload];
        localStorage["FavoriteCharacters"] = JSON.stringify(arr); //writing
        //...............................................................................

        return {
          ...state,
          FavoriteCharacters: [...state.FavoriteCharacters, action.payload],
        };
      } else {
        return {
          ...state,
        };
      }
    //===================================================================================
    case ActionType.REMOVE_FAVORITS:
      // console.log("Reducer REMOVE_FAVORITS", action.payload);
      //...............................................................................
      //add array to localStorage
      let arr: characterType[] = state.FavoriteCharacters.filter((Char) => Char.id !== action.payload.id);
      localStorage["FavoriteCharacters"] = JSON.stringify(arr); //writing
      //...............................................................................

      return {
        ...state,
        FavoriteCharacters: state.FavoriteCharacters.filter((Char) => Char.id !== action.payload.id),
      };
    //===================================================================================
    default:
      return state;
  }
};
