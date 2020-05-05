import React, { useContext } from "react";
import { FavoriteContext } from "../../context";
import PropTypes from "prop-types";

const FavoriteItem = ({ favoriteItem }) => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const removeFavorites = id => {
    const filterDeleted = favorites.filter(item => item.id !== favoriteItem.id);
    setFavorites(filterDeleted);
  };

  return (
    <tr>
      <td>{favoriteItem.title}</td>
      <td className="uk-text-right">
        <button
          id={favoriteItem.id}
          onClick={removeFavorites}
          className="uk-button"
          type="button"
          uk-icon="icon: close;"
        />
      </td>
    </tr>
  );
};

FavoriteItem.propTypes = {
  favoriteItem: PropTypes.object
};

export default FavoriteItem;
