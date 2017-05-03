import React, { Component } from 'react';
import FetchData from "./Components/FetchAppJson";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchData url="https://davidemaser.github.io/data/temp-globetrotter.json" method="get" target="countries" />
      </div>
    );
  }
}

export default App;
