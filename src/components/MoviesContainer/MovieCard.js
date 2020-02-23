import React from "react";
import { Link } from "react-router-dom";

const MovieCard = props => {
  return (
    <>
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img
            className="w-100 mb-2"
            src={props.movies.Poster}
            alt="Cover"
          />
          <h5 className="text-light card-title">
            {props.movies.Title} - {props.movies.Year}
          </h5>
          <Link className="btn btn-primary" to={'/movie/' + props.movies.imdbID}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
