import React, { useContext } from "react";
import Search from "../Search/Search";
import MovieContainer from "../../MoviesContainer/MoviesContainer";
import { GlobalContext } from "../../../GlobalState/GlobalState";
import Spinner from "../Spinner/Spinner";

const FirstPage = () => {
  const { loading } = useContext(GlobalContext);

  return (
    <div>
      <Search />
      {loading ? <Spinner /> : <MovieContainer />}
    </div>
  );
};

export default FirstPage;
