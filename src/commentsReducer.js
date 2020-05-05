export const commentsReducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload
      };

    case "setEmail":
      return {
        ...state,
        email: action.payload
      };

    case "setBody":
      return {
        ...state,
        body: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
