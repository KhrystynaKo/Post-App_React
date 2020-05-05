import React, { useContext } from "react";
import { Context } from "../context";
import { useLoadMore } from "../hooks/useLoadMore";
import PropTypes from "prop-types";

const LoadMore = ({ loader }) => {
  const { stateParams, dispatch } = useContext(Context);
  const { loadMore } = useLoadMore(stateParams, dispatch);

  return (
    <div className="uk-margin">
      <button
        onClick={loadMore}
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
      >
        Load more{" "}
        {loader && (
          <div className="uk-margin-small-left" uk-spinner="ratio: 0.6" />
        )}
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  loader: PropTypes.bool.isRequired
};

export default LoadMore;
