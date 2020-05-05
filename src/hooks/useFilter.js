import { useReducer } from "react";

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "setLimit":
      return {
        ...state,
        limit: action.payload
      };

    case "setSearch":
      return {
        ...state,
        search: action.payload
      };

    case "setOrder":
      return {
        ...state,
        order: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
export const useFilter = () => {
  const initialState = {
    limit: 6,
    search: "",
    order: "asc"
  };
  const [filterState, filterDispatch] = useReducer(
    filtersReducer,
    initialState
  );

  return { filterState, filterDispatch };
};
