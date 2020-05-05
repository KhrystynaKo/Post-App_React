import React from "react";
import PostGridItem from "./PostGridItem";
import PropTypes from "prop-types";

const PostsGrid = ({ posts }) => {
  return (
    <div
      className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"
      uk-grid="true"
    >
      {posts && posts.map(post => <PostGridItem key={post.id} post={post} />)}
    </div>
  );
};

PostsGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostsGrid;
