import React, { Component } from "react";
import { getSearchResults } from './services/apiSearch'
import Form from "./components/forms/Form";
import Tabs from "./components/tabs/TabsPanel";

class App extends Component {
  state = {
    searchResults: [],
    isLoading: true,
    category: 'movie',
    query: 'superman'
  };

  fetchSearch = e => {
    const { category, query } = this.state;
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    getSearchResults(category, query).then(data => {
      console.log("calling get search");
      this.setState({
        searchResults: data,
        isLoading: false
      });
    });
  };

  handleInputChange = query => {
    if(query){
      this.setState({
        query
      })
    }
  }

  handleCategoryChange = category => {
    console.log('*** Category: ', category);
    
    this.setState({
      category
    })
  
  };

  render() {
    const { isLoading, searchResults, category } = this.state;
    return (
      <div>
        <h1>React Movies App</h1>
        <Form
          onInputChange={this.handleInputChange}
          onCategoryChange={this.handleCategoryChange}
          onSubmit={this.fetchSearch}
          category={category}
        />
        <Tabs searchResults={searchResults}/>
      </div>
    );
  }
}

export default App;
