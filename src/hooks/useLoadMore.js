import React, { useContext } from "react";
import { Context } from "../context";

export const useLoadMore = params => {
  const { stateParams, dispatch } = useContext(Context);

  const start = (params.currentPage - 1) * params.limit;
  const end = start + +params.limit + params.loadPosts;

  const loadMore = () => {
    dispatch({ type: "setLoadPosts", payload: stateParams.loadPosts + 3 });
    dispatch({ type: "setStart", payload: start });
    dispatch({ type: "setEnd", payload: end });
  };

  return { loadMore };
};
