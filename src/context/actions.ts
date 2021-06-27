import { characterType } from "../types";

export enum ActionType {
  SET_CHARACTERS = "SET_CHARACTERS",
  HANDLE_PAGE = "HANDLE_PAGE",
  HANDLE_SEARCH = "HANDLE_SEARCH",
  HANDLE_STATUS = "HANDLE_STATUS",
  HANDLE_GENDER = "HANDLE_GENDER",
  SET_FAVORITS = "SET_FAVORITS",
  REMOVE_FAVORITS = "REMOVE_FAVORITS",
}
interface IsetCharactersAction_Payload {
  AllCharacters: characterType[];
  nbPages: number;
  nextPage: number;
  prevPage: number;
}

interface IsetCharactersAction {
  type: ActionType.SET_CHARACTERS;
  payload: IsetCharactersAction_Payload;
}

export const setCharactersAction = (data: IsetCharactersAction_Payload) => {
  const { AllCharacters, nbPages, nextPage, prevPage } = data;
  return {
    type: ActionType.SET_CHARACTERS as const,
    payload: {
      AllCharacters: AllCharacters,
      nbPages: nbPages,
      nextPage: nextPage,
      prevPage: prevPage,
    },
  };
};

interface IhandlePageAction {
  type: ActionType.HANDLE_PAGE;
  payload: string;
}

export const handlePageAction = (value: string) => {
  return {
    type: ActionType.HANDLE_PAGE as const,
    payload: value,
  };
};

interface IhandleSearchAction {
  type: ActionType.HANDLE_SEARCH;
  payload: {
    query: string;
  };
}

export const handleSearchAction = (value: string) => {
  return {
    type: ActionType.HANDLE_SEARCH as const,
    payload: {
      query: value,
    },
  };
};

interface IhandleStatusAction {
  type: ActionType.HANDLE_STATUS;
  payload: {
    query: string;
  };
}

export const handleStatusAction = (value: string) => {
  return {
    type: ActionType.HANDLE_STATUS as const,
    payload: {
      query: value,
    },
  };
};

interface IhandleGenderAction {
  type: ActionType.HANDLE_GENDER;
  payload: {
    query: string;
  };
}

export const handleGenderAction = (value: string) => {
  return {
    type: ActionType.HANDLE_GENDER as const,
    payload: {
      query: value,
    },
  };
};

interface IsetFavoritesAction {
  type: ActionType.SET_FAVORITS;
  payload: characterType;
}

export const setFavoritesAction = (item: characterType) => {
  return {
    type: ActionType.SET_FAVORITS as const,
    payload: item,
  };
};

interface IRemoveFavoritesAction {
  type: ActionType.REMOVE_FAVORITS;
  payload: characterType;
}

export const RemoveFavoritesAction = (item: characterType) => {
  return {
    type: ActionType.REMOVE_FAVORITS as const,
    payload: item,
  };
};

//--------------------------------------------------------------------------------------------------------------------

export type Action = IsetCharactersAction | IhandlePageAction | IhandleSearchAction | IhandleStatusAction | IhandleGenderAction | IRemoveFavoritesAction | IsetFavoritesAction;

//--------------------------------------------------------------------------------------------------------------------
