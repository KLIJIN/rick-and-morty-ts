import React, { useContext, useEffect, useReducer } from "react";
import { Action } from "../context/actions"
import { characterType } from "../types";
import { contextReducer, ReducerState } from "./reducer";
import { setCharactersAction, handlePageAction, handleSearchAction, handleStatusAction, handleGenderAction, setFavoritesAction, RemoveFavoritesAction } from "./actions";

export interface IContext {
  AllCharacters: characterType[];
  FavoriteCharacters: characterType[];
  currentPage: number;
  nextPage: number;
  prevPage: number;
  nbPages: number;
  searchQuery?: string;
  statusQuery?: string;
  genderQuery?: string;
  handlePage?: (value: string) => void;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStatus?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleGender?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  favoritesHandler?: (item: characterType) => void;
  favoritsRemove?: (item: characterType) => void;
}

const getLocalStorage = (): characterType[] => {
  let list = localStorage.getItem("FavoriteCharacters");
  if (list) {
    // debugger;
    return JSON.parse(localStorage.getItem("FavoriteCharacters") || '{}')
  } else {
    return [];
  }
};


const initialState = {
  AllCharacters: [],
  FavoriteCharacters: getLocalStorage(),
  currentPage: 1,
  nextPage: 1,
  prevPage: 1,
  nbPages: 1,
  searchQuery: "",
};

const AppContext = React.createContext<IContext>(initialState);


const AppProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer<React.Reducer<ReducerState, Action>>(contextReducer, initialState);

  const url = "https://rickandmortyapi.com/api/character/?page=";

  const fetchCharacters = async (url: string): Promise<void> => {
    console.log("fetchCharacters", url);
    try {
      const response = await fetch(url);
      const body = await response.json();
      // console.log(body?.results[0]);
      console.log("info", body.info);
      dispatch(
        setCharactersAction({
          AllCharacters: body.results,
          nbPages: body.info.pages,
          nextPage: body.info.next,
          prevPage: body.info.prev,
        })
      );
    } catch (error) {
      console.log("fetchCharacters ERROR:", error);
      dispatch(setCharactersAction(initialState));
    }
  };

  useEffect(() => {
    fetchCharacters(`${url}${state.currentPage}
                     ${state.searchQuery ? `&name=${state.searchQuery}` : ""}
                     ${state.statusQuery ? `&status=${state.statusQuery}` : ""}
                     ${state.genderQuery ? `&gender=${state.genderQuery}` : ""}`
    );
  }, [state.currentPage, state.searchQuery, state.statusQuery, state.genderQuery]);

  console.log("data", state);


  //=============================-context features-=================================

  const handlePage = (value: string) => {
    dispatch(handlePageAction(value));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    dispatch(handleSearchAction(value));
  };

  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(handleStatusAction(event.target.value));
  };
  const handleGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(handleGenderAction(event.target.value));
  };

  const favoritesHandler = (item: characterType) => {
    dispatch(setFavoritesAction(item));
  };

  const favoritsRemove = (item: characterType) => {
    dispatch(RemoveFavoritesAction(item));
  };
  //=========================//======================//===========================
  return <AppContext.Provider value={{ ...state, handlePage, handleSearch, handleStatus, handleGender, favoritesHandler, favoritsRemove }}>{children}</AppContext.Provider>;
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
