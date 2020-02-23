import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const intialState = {
  movies: [],
  loading: false,
  movie: []
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);
  const search = text => {
    axios
      .get(`http://www.omdbapi.com/?apikey=43ac1065&s=${text}`)
      .then(response => {
        dispatch({ type: "SEARCH", payload: response.data });
      })
      .catch(err => console.log(err));
  };
  const fetchMovie = id => {
    axios
      .get(`http://www.omdbapi.com/?apikey=43ac1065&i=${id}`)
      .then(response => {
        dispatch({ type: "FETCH", payload: response.data });
      })
      .catch(err => console.log(err));
  };
  const setLoading = () => {
    dispatch({ type: "SETLOADING", payload: true });
  };
  return (
    <GlobalContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        search,
        setLoading,
        fetchMovie
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
