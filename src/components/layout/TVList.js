import React from "react";
import ItemCard from "./ItemCard";

const TVList = props => {
  return (
    <div className="container">
      {props.shows.map(show => {
        const { name, id, poster_path, popularity, first_air_date, overview } = show;
        return <ItemCard 
        key={id} 
        name={name} 
        id={id} 
        poster_path={poster_path}
        popularity={popularity}
        first_air_date={first_air_date}
        overview={overview}
        />;
      })}
    </div>
  );
};

export default TVList;
