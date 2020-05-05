export const mainStatesReducer = (state, action) => {
  switch (action.type) {
    case "setStart":
      return {
        ...state,
        start: action.payload
      };

    case "setEnd":
      return {
        ...state,
        end: action.payload
      };

    case "setCurrentPage":
      return {
        ...state,
        currentPage: action.payload
      };

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

    case "setView":
      return {
        ...state,
        view: action.payload
      };
    case "setLoadPosts":
      return {
        ...state,
        loadPosts: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
