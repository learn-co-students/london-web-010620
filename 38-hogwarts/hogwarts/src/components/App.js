import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsList from "./HogsList";
import SortAndFilterOptions from "./SortAndFilterOptions";

class App extends Component {
  state = {
    hogs: hogs,
    greasedOnly: false,
    sortType: "ABC",
    hiddenHogIds: ["Mudblood"]
  };

  toggleGreasedOnly = () => {
    this.setState({
      greasedOnly: !this.state.greasedOnly
    });
  };

  setSortType = sortType => {
    this.setState({
      sortType
    });
  };

  render() {
    const hogsToRender = this.state.hogs
      .filter(hog => {
        return this.state.greasedOnly ? hog.greased : true;
      })
      .filter(hog => {
        return !this.state.hiddenHogIds.includes(hog.name);
      });

    const sortedHogsToRender = hogsToRender.sort((hogA, hogB) => {
      if (this.state.sortType === "DEFAULT") {
        return 0;
      } else if (this.state.sortType === "ABC") {
        return hogA.name.localeCompare(hogB.name);
      } else if (this.state.sortType === "WEIGHT") {
        return hogB.weight - hogA.weight;
      }
    });

    return (
      <div className="App">
        <Nav />
        <SortAndFilterOptions
          sortType={this.state.sortType}
          setSortType={this.setSortType}
          greasedOnly={this.state.greasedOnly}
          toggleGreasedOnly={this.toggleGreasedOnly}
        />
        <HogsList hogs={sortedHogsToRender} />
      </div>
    );
  }
}

export default App;
