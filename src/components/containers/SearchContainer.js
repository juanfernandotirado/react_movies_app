import React, { Component } from "react";
import SearchList from "../layout/SearchList";
import Loading from "../layout/Loading";
import { getNowPlaying } from "../../services/apiMovies";

class SearchContainer extends Component {
  state = {
    searchResults: [],
    isLoading: true
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

      getNowPlaying().then(data => {
      this.setState({
        isLoading: false,
        searchResults: data
      });
    });
  }

  render() {
    const { isLoading, searchResults } = this.state;
    return (
      <div>{isLoading ? <Loading /> : <SearchList searchResults={searchResults} />}</div>
    );
  }
}

export default SearchContainer;
