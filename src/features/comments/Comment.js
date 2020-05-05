import React from "react";
import PropTypes from "prop-types";

const Comment = ({ name, email, body }) => {
  return (
    <>
      <article className="uk-comment">
        <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
          <div className="uk-width-expand">
            <h4 className="uk-comment-title uk-margin-remove">
              <a className="uk-link-reset" href="name">
                {name}
              </a>
            </h4>
            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              <li>
                <a href="email">{email}</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="uk-comment-body">
          <p>{body}</p>
        </div>
      </article>
      <hr />
    </>
  );
};

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string
};

export default Comment;
