import React from "react";
//components
// import SearchForm from "../Components/SearchForm";
import { Characters } from "../Components/Characters";
//import Buttons from "../Components/Buttons";
import { useGlobalContext, IContext } from "../context/context";

const FavoritesPage: React.FC = () => {
  const { FavoriteCharacters }: IContext = useGlobalContext();
  return (
    <div>
      <Characters characters={FavoriteCharacters} title={'Favorites'} />
    </div>
  );
};

export default FavoritesPage;
