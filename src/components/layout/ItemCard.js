import React from "react";

const ItemCard = props => {
  const { title, id, poster_path, popularity, release_date, overview, name, first_air_date } = props;

  const imgPath = "http://image.tmdb.org/t/p/w185/" + poster_path

  const date = release_date ? release_date : first_air_date

  return (<div className="container">
    <div>
      <img src = {imgPath}/>      
    </div>
    <div>
    <h3>{title || name}</h3>
    <p>Release Date : {date} | Popularity: {popularity}</p>
    </div>
    <p>{overview}</p>
    </div>);    
};

export default ItemCard;
