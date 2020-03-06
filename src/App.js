import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MoviesContainer from "./components/containers/MoviesContainer";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <h1>React Movies App</h1>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Movies" />
          <Tab label="Search" />
          <Tab label="TV" />
        </Tabs>
      </AppBar>
      <MoviesContainer />
    </div>
  );
}

export default App;
