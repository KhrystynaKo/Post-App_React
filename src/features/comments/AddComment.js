import React, { useReducer } from "react";
import { commentsReducer } from "../../commentsReducer";
import PropTypes from "prop-types";

const AddComment = ({ comments, setComments }) => {
  const commentState = {
    name: "",
    email: "",
    body: ""
  };

  const [commentParams, dispatch] = useReducer(commentsReducer, commentState);

  const handleSubmit = e => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        id: Date.now(),
        name: commentParams.name,
        email: commentParams.email,
        body: commentParams.body
      }
    ]);
    dispatch({ type: "setName", payload: "" });
    dispatch({ type: "setEmail", payload: "" });
    dispatch({ type: "setBody", payload: "" });
  };

  return (
    <form
      action="#"
      className="uk-comment-form uk-margin-medium-top"
      onSubmit={e => handleSubmit(e)}
    >
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Add Comment</legend>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            placeholder="Name"
            required
            value={commentParams.name}
            onChange={e =>
              dispatch({ type: "setName", payload: e.target.value })
            }
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="email"
            placeholder="Email"
            required
            value={commentParams.email}
            onChange={e =>
              dispatch({ type: "setEmail", payload: e.target.value })
            }
          />
        </div>
        <div className="uk-margin">
          <textarea
            className="uk-textarea"
            rows="5"
            placeholder="Comment"
            required
            value={commentParams.body}
            onChange={e =>
              dispatch({ type: "setBody", payload: e.target.value })
            }
          />
        </div>
        <div className="uk-margin">
          <button className="uk-button uk-button-primary" type="submit">
            Post Comment
          </button>
        </div>
      </fieldset>
    </form>
  );
};

AddComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  setComments: PropTypes.func
};

export default AddComment;
