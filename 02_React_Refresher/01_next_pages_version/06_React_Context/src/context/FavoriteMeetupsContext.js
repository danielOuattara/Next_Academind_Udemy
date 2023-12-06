import { useState, createContext, useContext } from "react";

const FavoriteMeetupsContext = createContext({
  favoriteMeetups: [],
  totalFavorite: 0,
  addToFavoriteMeetups: (meetup) => {},
  removeFromFavoriteMeetups: (meetupId) => {},
  isFavoriteMeetup: (meetupId) => {},
});

export default function FavoriteMeetupsContextProvider(props) {
  const [favoriteMeetups, setFavoriteMeetups] = useState([]);

  const addToFavoriteMeetups = (meetup) => {
    const meetupIndexInFavorites = favoriteMeetups.findIndex(
      (item) => item.id === meetup.id,
    );
    if (meetupIndexInFavorites === -1) {
      // add a new meetup in favortie
      return setFavoriteMeetups((prevState) => [...prevState, meetup]);
    } else {
      // meetup is already in favorite
      return 0;
    }
  };

  const removeFromFavoriteMeetups = (meetupId) => {
    const meetupIndexInFavorites = favoriteMeetups.findIndex(
      (item) => item.id === meetupId,
    );

    if (meetupIndexInFavorites !== -1) {
      // meetup exists in favorite
      return setFavoriteMeetups((prevState) =>
        prevState.filter((item) => item.id !== meetupId),
      );
    } else {
      // meetup does not exist in favorite
      return 0;
    }
  };

  const isFavorite = (meetupId) => {
    const meetupIndexInFavorites = favoriteMeetups.findIndex(
      (item) => item.id === meetupId,
    );
    if (meetupIndexInFavorites !== -1) {
      // is in favorite
      return true;
    }
    // not in favorite
    return false;
  };

  const context = {
    favoriteMeetups,
    totalFavorite: favoriteMeetups.length,
    addToFavoriteMeetups,
    removeFromFavoriteMeetups,
    isFavorite,
  };

  return (
    <FavoriteMeetupsContext.Provider value={context}>
      {props.children}
    </FavoriteMeetupsContext.Provider>
  );
}

export const useFavoriteMeetupsContext = () =>
  useContext(FavoriteMeetupsContext);
