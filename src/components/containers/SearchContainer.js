import React, { Component } from "react";
import SearchList from "../layout/SearchList";

const SearchContainer = props => {

  const {searchResults, query, searchFlag} = props;

  let message

  if(!query && !searchFlag){
    message = 'Please enter a search'
  }else if(query && !searchFlag){
    message = 'Please initiate a search'
  } else if(query && searchResults.length == 0 && searchFlag){
    message = 'Sorry there were no results'
  }

  return (
    <div>
      {searchResults.length == 0 || !searchFlag ?  
      <h2 style={{textAlign:'center'}}>{message}</h2> : <SearchList searchResults={searchResults}/>}
    </div>
  )
}

export default SearchContainer
