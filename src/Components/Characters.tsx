import React from "react";
import { characterType } from "../types";
import { useGlobalContext } from "../context/context";

type Props = {
  characters: characterType[];
  title: string;
};

export const Characters: React.FC<Props> = ({ characters, title }) => {

  const { FavoriteCharacters, favoritesHandler, favoritsRemove } = useGlobalContext();

  return (
    <section className="section ">
      <div className="single_story"> <h3> {title}: </h3> </div>

      <div className="container">
        {characters?.map((item) => {

          const { id, name, status, species, gender, image, origin, location } = item;

          const existingFavoritChar = FavoriteCharacters?.find((Char) => Char.id === id);

          return (
            <div className="CharacterCard" key={id}>
              <div className="CharacterCard__image" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="CharacterCard__description">
                <div> Name: {name} </div>
                <div> Gender: {gender} </div>
                <div> Species: {species}</div>
                <div> Status: {status}</div>
                <div> Origin: {origin.name}</div>
                <div> Location: {location.name}</div>

                {!existingFavoritChar && favoritesHandler &&
                  <div className="favorites" onClick={() => favoritesHandler(item)}>
                    <strong> To Favorites </strong>
                  </div>
                }

                {existingFavoritChar && favoritsRemove &&
                  <div className="favorites" onClick={() => favoritsRemove(item)}>
                    <strong> Kick out </strong>
                  </div>
                }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Characters;
