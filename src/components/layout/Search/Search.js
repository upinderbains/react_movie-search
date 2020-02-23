import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../GlobalState/GlobalState"


const Search = () => {
  const [input, setInput] = useState("");
  const { search } = useContext(GlobalContext)
  const submit = e => {
    e.preventDefault();
    search(input);
  };
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for movies, tv-shows..
        </h1>
        <form id="search-form" onSubmit={submit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Search Movies, Tv-shows ..."
          />
          
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
