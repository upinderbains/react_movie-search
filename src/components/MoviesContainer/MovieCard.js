import React from "react";

const MovieCard = props => {
  return (
    <>
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img
            className="w-100 mb-2"
            src={props.movies.Poster}
            alt="Movie Cover"
          />
          <h5 className="text-light card-title">
            {props.movies.Title} - {props.movies.Year}
          </h5>
          <a className="btn btn-primary" href="#">
            Movie Details
            <i className="fas fa-chevron-right" />
          </a>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
