import React, { useState, useEffect, useReducer } from "react";

const initialState = {
  loader: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      return {
        loader: true,
        error: null
      };
    case "success":
      return {
        loader: false,
        error: null
      };
    case "error":
      return {
        loader: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const useFetch = url => {
  const [data, setData] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "init" });
    fetch(url)
      .then(response => {
        setTotalCount(response.headers.get("x-total-count"));
        return response.json();
      })
      .then(data => {
        setData(data);
        dispatch({ type: "success" });
      })
      .catch(error => dispatch({ type: "error", payload: error }));
  }, [url]);

  return { state, totalCount, data };
};

export default useFetch;
