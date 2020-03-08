import React, { Component } from "react";
import MoviesList from "../layout/MoviesList";
import Loading from "../layout/Loading";
import MoviesSelect from "../selectors/MoviesSelect";
import { getMovies } from "../../services/apiMovies";

class MoviesContainer extends Component {
  state = {
    movies: [],
    isLoading: true,
    category: "now_playing"
  };

  handleChange = category => {
    this.setState(
      {category},
      this.fetchMovies
    );
  };

  fetchMovies = () => {
    getMovies(this.state.category).then(data => {
      this.setState({
        isLoading: false,
        movies: data
      });
    });
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.fetchMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <div>
          <MoviesSelect
            category={this.state.category}
            onChange={this.handleChange}
          />
        </div>
        <div>{isLoading ? <Loading /> : <MoviesList movies={movies} />}</div>
      </div>
    );
  }
}

export default MoviesContainer;
