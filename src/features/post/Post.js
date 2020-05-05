import React, { useState, useEffect } from "react";
import AddComment from "../comments/AddComment";
import CommentsList from "../comments/CommentList";
import usePost from "../../hooks/usePost";
import { useParams } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  const { data, state } = usePost(`/${id}?_embed=comments&_expand=user`);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    data && setComments(data.comments);
  }, [data]);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <h1 className="uk-heading-bullet uk-margin-medium-bottom">
          {state.loader && (
            <span
              className="uk-search-icon uk-search-icon-flip"
              uk-spinner="ratio: 0.6"
            />
          )}
          {data && <span>{data.title}</span>}
          {data && (
            <a className="uk-text-small" href="#">
              {data.user.name}
            </a>
          )}
        </h1>
        <div className="uk-article uk-dropcap uk-margin-large-bottom">
          {data && <p>{data.body}</p>}
        </div>

        <hr />
        {data && <CommentsList comments={comments} />}
        <AddComment setComments={setComments} comments={comments} />
      </div>
    </div>
  );
};

export default Post;
