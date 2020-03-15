import React, { Component } from "react";
import { getSearchResults } from './services/apiSearch'
import Form from "./components/forms/Form";
import TabsPanel from "./components/tabs/TabsPanel";
import { Typography } from "@material-ui/core";

class App extends Component {
  state = {
    searchResults: [],
    isLoading: true,
    category: 'multi',
    query: '',
    searchFlag: false
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
        searchFlag: true,
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
    const { searchFlag, query, searchResults, category } = this.state;
    
    return (
      <div style={{width:'90%', marginRight:'auto', marginLeft:'auto'}}>
        <Typography><h1 style={{ 
          textAlign:'center',
          borderRadius:'7px', 
          border:'3px solid black'}}>
            React Movies App</h1>
        </Typography>
        <Form
          onInputChange={this.handleInputChange}
          onCategoryChange={this.handleCategoryChange}
          onSubmit={this.fetchSearch}
          category={category}
        />
        <div style={{border:'1px solid gray', marginTop:'4rem'}}>
          <TabsPanel searchResults={searchResults} query={query} searchFlag={searchFlag} />
        </div>
      </div>
    );
  }
}

export default App;
