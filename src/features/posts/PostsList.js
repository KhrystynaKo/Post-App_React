import React from "react";
import PostListItem from "./PostListItem";
import PropTypes from "prop-types";

const PostsList = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts && posts.map(post => <PostListItem key={post.id} post={post} />)}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostsList;
