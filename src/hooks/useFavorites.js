import React, { useState, useReducer } from "react";

// const initialState = [
//   {
//     id: 1,
//     title: "g",
//     type: "post"
//   }
// ];

// const favoriteReducer = (state, action) => {
//   switch (action.type) {
//     case "addFavorite":
//       const id = new Date().getTime();
//       return [...state, id, ...action.payload];
//     case "removeFavorite":
//       return state.filter(favorite => favorite.id !== action.payload);

//     default:
//       return state;
//   }
// };
// export const useFavoritesProvider = () => {
//   const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

//   const addFavorite = () => {
//     dispatch({
//       type: "addFavorite",
//       payload: data
//     });
//   };

//   const removeFavorite = () => {
//     dispatch({
//       type: "removeFavorite",
//       payload: id
//     });
//   };

//   return { favorites, addFavorite, removeFavorite };
// };

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  return { favorites, setFavorites };
};
