import React from "react";
import FavoritesList from "../features/favorite/FavoritesList";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/" href="posts-grid.html">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/albums" href="albums.html">
              Albums
            </Link>
          </li>
        </ul>
      </div>
      <FavoritesList />
    </nav>
  );
};
export default Navbar;
