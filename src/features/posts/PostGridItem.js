import React, { useContext } from "react";
import { FavoriteContext } from "../../context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostGridItem = ({ post }) => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const chooseFavouritePost = (e, post) => {
    e.preventDefault();

    const chosenFavoriteItem = favorites.filter(item => item.id === post.id);
    const favItemsWithoutChosen = favorites.filter(item => item.id !== post.id);

    if (chosenFavoriteItem.length < 1) setFavorites([...favorites, post]);
    else setFavorites(favItemsWithoutChosen);
  };

  return (
    <div>
      <div
        className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container">
          <img src="https://picsum.photos/600/400" alt="" uk-cover="true" />
          <canvas width="600" height="400" />
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
              {post.title}{" "}
              <a
                href="/"
                className="uk-icon-link"
                uk-icon="heart"
                onClick={e => chooseFavouritePost(e, post)}
              >
                {" "}
              </a>
            </h3>
            <p>{post.body}</p>
            <Link
              to={`/post/${post.id}`}
              href="post.html"
              className="uk-button uk-button-text"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PostGridItem.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string
  })
};

export default PostGridItem;
