import React, { useContext } from "react";
import { FavoriteContext } from "../../context";
import FavoriteItem from "./FavoriteItem";

const FavoritesList = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="uk-navbar-right">
      <div className="uk-navbar-item">
        <button
          className="uk-button"
          type="button"
          uk-icon="icon: heart; ratio: 2"
        />
        <div className="uk-width-large" uk-dropdown="mode: click">
          <div className="uk-dropdown-grid uk-child-width-1-1@m" uk-grid="true">
            <div>
              <table className="uk-table uk-table-divider uk-table-justify">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th className="uk-text-right">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {favorites.map(favoriteItem => (
                    <FavoriteItem
                      key={favoriteItem.id}
                      favoriteItem={favoriteItem}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FavoritesList;
