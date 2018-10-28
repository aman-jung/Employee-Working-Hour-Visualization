import React, { Component } from "react";
import BarChart from "./Component/BarChart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>d3ia dashboard</h2>
        <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
      </div>
    );
  }
}

export default App;
