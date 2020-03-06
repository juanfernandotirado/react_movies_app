import React, { Component } from "react";
import MoviesList from "../layout/MoviesList";
import Loading from "../layout/Loading";
import { getNowPlaying } from "../../services/apiMovies";

class MoviesContainer extends Component {
  state = {
    movies: [],
    isLoading: true
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    let data = getNowPlaying().then(data => {
      this.setState({
        isLoading: false,
        movies: data
      });
    });
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>{isLoading ? <Loading /> : <MoviesList movies={movies} />}</div>
    );
  }
}

export default MoviesContainer;
