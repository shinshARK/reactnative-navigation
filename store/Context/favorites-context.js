import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  // // Add state debugging
  // useEffect(() => {
  //   console.log("Context state updated:", favoriteMealIds);
  // }, [favoriteMealIds]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavoriteIds) => {
      // Prevent duplicate adds by checking if ID already exists
      if (currentFavoriteIds.includes(id)) {
        // console.log("ID already exists, state unchanged:", currentFavoriteIds);
        return currentFavoriteIds;
      }

      const newState = [...currentFavoriteIds, id];
      // console.log("Adding favorite. New state will be:", newState);
      return newState;
    });
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavoriteIds) => {
      // Only remove if ID exists
      if (!currentFavoriteIds.includes(id)) {
        // console.log("ID not found, state unchanged:", currentFavoriteIds);
        return currentFavoriteIds;
      }

      const newState = currentFavoriteIds.filter((mealId) => mealId !== id);
      // console.log("Removing favorite. New state will be:", newState);
      return newState;
    });
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
