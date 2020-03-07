import React from "react";
import ItemCard from "./ItemCard";

const MoviesList = props => {
  return (
    <div className="container">
      {props.movies.map(movie => {
        const { title, id, poster_path, popularity, release_date, overview } = movie;
        return <ItemCard key={id} 
        title={title} 
        id={id} 
        poster_path={poster_path}
        popularity={popularity}
        release_date={release_date}
        overview={overview}
        />;
      })}
    </div>
  );
};

export default MoviesList;
