import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3 className="uk-margin-remove-top">Comments:</h3>
      <div className="uk-comments">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </div>
    </>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsList;
