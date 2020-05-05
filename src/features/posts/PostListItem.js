import React, { useContext } from "react";
import { FavoriteContext } from "../../context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostListItem = ({ post }) => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const active = favorites.find(item => item.id === post.id)
  console.log(active)
  const chooseFavouritePost = (e, post) => {
    e.preventDefault();
    const chosenFavoriteItem = favorites.filter(item => item.id === post.id);
    const favItemsWithoutChosen = favorites.filter(item => item.id !== post.id);

    if (chosenFavoriteItem.length < 1) setFavorites([...favorites, post]);
    else setFavorites(favItemsWithoutChosen);
  };

  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {post.title}{" "}
            <a
              href="href"
              className={active ? "uk-icon-link active" : "uk-icon-link"}
              // className="uk-icon-link"
              uk-icon="heart"
              onClick={e => chooseFavouritePost(e, post)}
            >
              {" "}
            </a>
          </h3>
        </div>
        <div className="uk-card-body">
          <p>{post.body}</p>
        </div>
        <div className="uk-card-footer">
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
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string
  })
};

export default PostListItem;
