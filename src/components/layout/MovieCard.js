import React from "react";

const MovieCard = props => {
  const { title } = props;

  return <div className="container">{title}</div>;
};

export default MovieCard;
