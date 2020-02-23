import React from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
          ...state,
          movies: action.payload.Search
      };
    default:
      return state;
  }
};

export default AppReducer;
