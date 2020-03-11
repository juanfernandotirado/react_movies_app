import React, { Component } from "react";
import SearchList from "../layout/SearchList";
import Loading from "../layout/Loading";

class SearchContainer extends Component {

  render() {
    const {searchResults} = this.props;
    console.log('*** movies list: ', this.props.searchResults);

    
    return (
      <div>{searchResults.length == 0 ?  'Click Search': <SearchList searchResults={searchResults}/>}</div>
    );
  }
}

export default SearchContainer;
