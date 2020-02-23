const AppReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        movies: action.payload.Search,
        loading: false
      };
    case "FETCH":
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case "SETLOADING":
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default AppReducer;
