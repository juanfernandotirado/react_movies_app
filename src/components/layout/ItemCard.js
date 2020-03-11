import React from "react";

const ItemCard = props => {
  const { title, id, poster_path, popularity, release_date, overview, name, first_air_date } = props;

  let imgPath

  if(poster_path){
    imgPath = "http://image.tmdb.org/t/p/w185/" + poster_path
  }else{
    imgPath = 'https://images.pexels.com/photos/390089/film-movie-motion-picture-390089.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=278&w=185'
  }

  // let imgPath = "http://image.tmdb.org/t/p/w185/" + poster_path

  const date = release_date ? release_date : first_air_date

  return (<div className="container">
    <div>
      <img src = {imgPath} width='185' height='278'/>      
    </div>
    <div>
    <h3>{title || name}</h3>
    <p>Release Date : {date} | Popularity: {popularity}</p>
    </div>
    <p>{overview}</p>
    </div>);    
};

export default ItemCard;
