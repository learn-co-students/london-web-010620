import React from "react";
// Import our array of painting objects as a variable called paintings
import paintings from "./data/paintings";
// Import our Painting class so we can render Painting components
import Painting from "./Painting";

// [
//   {value: "DEFAULT", text: "Default"}
// ]

// This class follows the React container component pattern - it is in charge of containing the data (in this case, the array of paintings), rendering each indiviudal Painting component and passing it a painting object as a prop
class PaintingsList extends React.Component {
  state = {
    showPopular: true,
    paintings: [...paintings],
    searchTerm: "",
    sortType: "DEFAULT"
  };

  renderPaintings() {
    let paintingsToRender = this.state.paintings;

    if (this.state.showPopular) {
      paintingsToRender = paintingsToRender.filter(p => p.votes > 85);
    }

    if (this.state.searchTerm) {
      paintingsToRender = paintingsToRender.filter(painting =>
        painting.title
          .toLocaleLowerCase()
          .includes(this.state.searchTerm.toLocaleLowerCase())
      );
    }

    if (this.state.sortType !== "DEFAULT") {
      // paintingsToRender.sort_by
      paintingsToRender.sort((paintingA, paintingB) => {
        if (this.state.sortType === "VOTES") {
          return paintingB.votes - paintingA.votes;
        } else if (this.state.sortType === "ABC") {
          return paintingA.title.localeCompare(paintingB.title);
        }
      });
    }

    return paintingsToRender.map(painting => (
      <Painting
        key={painting.id}
        painting={painting}
        upvote={this.upvotePainting}
      />
    ));
    // Iterate through our array of paintings and for each one, render a Painting component, passing down the current painting object as a prop. We also give each Painting a unique key based on its id, so that React can identify each component individually when deciding whether or not it needs to update
  }

  upvotePainting = paintingId => {
    this.setState({
      paintings: this.state.paintings.map(painting => {
        if (painting.id === paintingId) {
          // painting.votes++;
          return {
            ...painting,
            votes: painting.votes + 1
          };
        } else {
          return painting;
        }
      })
    });
  };

  togglePopularFilter = () =>
    this.setState({ showPopular: !this.state.showPopular });

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSortTypeChange = event => {
    this.setState({
      sortType: event.target.value
    });
  };

  render() {
    return (
      <ul>
        {/* Call our renderPaintings function to render each Painting component  */}
        <button onClick={this.togglePopularFilter}>
          {this.state.showPopular ? "Show all paintings" : "Show only popular"}
        </button>
        <input
          onChange={this.handleSearchTermChange}
          placeholder="Title search"
        />
        <div onChange={this.handleSortTypeChange}>
          <label>
            Default
            <input
              type="radio"
              value="DEFAULT"
              checked={this.state.sortType === "DEFAULT"}
            />
          </label>
          <label>
            Votes
            <input
              type="radio"
              value="VOTES"
              checked={this.state.sortType === "VOTES"}
            />
          </label>
          <label>
            ABC
            <input
              type="radio"
              value="ABC"
              checked={this.state.sortType === "ABC"}
            />
          </label>
        </div>
        {this.renderPaintings()}
      </ul>
    );
  }
}

// Export our class as a named export
export default PaintingsList;
