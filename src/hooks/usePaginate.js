import React, { useState } from "react";

export const usePaginate = (totalCount, stateParams, dispatch) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / stateParams.limit); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    dispatch({
      type: "setCurrentPage",
      payload: Math.min(stateParams.currentPage + 1, totalCount)
    });
    const startPost = stateParams.currentPage * stateParams.limit;
    dispatch({ type: "setStart", payload: startPost });
    const endPost = startPost + +stateParams.limit;
    dispatch({ type: "setEnd", payload: endPost });
  };

  const prevPage = () => {
    dispatch({
      type: "setCurrentPage",
      payload: Math.max(stateParams.currentPage - 1, 1)
    });
    const startPost = (stateParams.currentPage - 2) * stateParams.limit;
    dispatch({ type: "setStart", payload: startPost });
    const endPost = startPost + +stateParams.limit;
    dispatch({ type: "setEnd", payload: endPost });
  };

  const paginate = page => {
    dispatch({ type: "setCurrentPage", payload: page });
    dispatch({ type: "setLoadPosts", payload: 3 });
    const begin = (page - 1) * stateParams.limit;
    dispatch({ type: "setStart", payload: begin });
    const end = begin + +stateParams.limit;
    dispatch({ type: "setEnd", payload: end });
  };

  return { nextPage, prevPage, paginate, pageNumbers };
};
