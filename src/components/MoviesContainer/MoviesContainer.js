import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { GlobalContext } from "./../../GlobalState/GlobalState";

const MoviesContainer = () => {
  const { movies } = useContext(GlobalContext);
  let content = "";

  content =
    movies.length > 0
      ? movies.map((movie, index) => <MovieCard key={index} movies={movie} />)
      : null;

  return <div>{content}</div>;
};

export default MoviesContainer;
