import React, { useEffect, useContext } from "react";
import { GlobalContext } from "./../../GlobalState/GlobalState";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner/Spinner";

const Movie = () => {
  const { fetchMovie, movie, setLoading, loading } = useContext(GlobalContext);

  const { id } = useParams();
  useEffect(() => {
    fetchMovie(id);
    setLoading();
  }, [id]);

  let movieContent = (
    <div className="row">
      <div className="col-md-4 card card-body">
        <img className="thumbnail" src={movie.Poster} alt="Poster" />
      </div>
      <div className="col-md-8">
        <h2 className="mb-4">{movie.Title}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Genre:</strong> {movie.Genre}
          </li>
          <li className="list-group-item">
            <strong>Released:</strong> {movie.Released}
          </li>
          <li className="list-group-item">
            <strong>Rated:</strong> {movie.Rated}
          </li>
          <li className="list-group-item">
            <strong>IMDB Rating:</strong> {movie.imdbRating}
          </li>
          <li className="list-group-item">
            <strong>Director:</strong> {movie.Director}
          </li>
          <li className="list-group-item">
            <strong>Writer:</strong> {movie.Writer}
          </li>
          <li className="list-group-item">
            <strong>Actors:</strong> {movie.Actors}
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About</h3>
            {movie.Plot}
            <hr />
            <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View onIMDB
            </a>
            <Link to="/" className="btn btn-deafult text-light">
              Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  let content = loading ? <Spinner /> : movieContent;
  return <div className="container">{content}</div>;
};

export default Movie;
