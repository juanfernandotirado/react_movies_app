import React from "react";
import ItemCard from "./ItemCard";

const SearchList = props => {
  return (
    <div className="container">
      {props.searchResults.map(result => {
        const { popularity, id } = result;
        return <ItemCard key={id} popularity={popularity} id={id} />;
      })}
    </div>
  );
};

export default SearchList;
