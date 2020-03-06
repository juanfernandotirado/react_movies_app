import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = props => {
  return (
    <div className="container">
      {props.movies.map(movie => {
        const { title, id } = movie;
        return <MovieCard key={id} title={title} id={id} />;
      })}
    </div>
  );
};

export default MoviesList;
