import React, { Component } from "react";
import TVList from "../layout/TVList";
import Loading from "../layout/Loading";
import { getTVShows } from "../../services/apiTV";
import TVSelect from "../selectors/TVSelect";

class TVContainer extends Component {
  state = {
    shows: [],
    isLoading: true,
    category: "airing_today"
  };

  handleChange = category => {
    this.setState(
      {category},
      this.fetchTVShows
    );
  };

  fetchTVShows = () => {
    getTVShows(this.state.category).then(data => {
      this.setState({
        isLoading: false,
        shows: data
      });
    });
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    this.fetchTVShows();
  }

  render() {
    const { isLoading, shows, category } = this.state;
    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div>
        <TVSelect
            category={category}
            onChange={this.handleChange}
          />
        </div>
        <div>{isLoading ? <Loading /> : <TVList shows={shows} />}</div>
      </div>
      
    );
  }
}

export default TVContainer;
