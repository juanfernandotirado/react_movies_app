import React from "react";
import ItemCard from "./ItemCard";

const SearchList = props => {
  return (
    <div className="container">   
      {props.searchResults.map(result => {
        const { title, name, id, poster_path, popularity, release_date, first_air_date, overview } = result;
        return <ItemCard 
        key={id} 
        name={name}
        title={title} 
        id={id} 
        poster_path={poster_path}
        popularity={popularity}
        release_date={release_date}
        first_air_date={first_air_date}
        overview={overview}
        />;
      })}
    </div>
  );
};

export default SearchList;
