import React, { Component } from "react";
import TVList from "../layout/TVList";
import Loading from "../layout/Loading";
import { getAiringToday } from "../../services/apiTV";

class TVContainer extends Component {
  state = {
    shows: [],
    isLoading: true
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    getAiringToday().then(data => {
      this.setState({
        isLoading: false,
        shows: data
      });
    });
  }

  render() {
    const { isLoading, shows } = this.state;
    return (
      <div>{isLoading ? <Loading /> : <TVList shows={shows} />}</div>
    );
  }
}

export default TVContainer;
