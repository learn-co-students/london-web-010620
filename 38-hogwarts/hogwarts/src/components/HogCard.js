import React from "react";

class HogCard extends React.Component {
  state = {
    showDetails: false
  };

  nameToImg = name =>
    `../hog-imgs/${name
      .toLowerCase()
      .split(" ")
      .join("_")}.jpg`;

  toggleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  render() {
    const { name, specialty, weight, greased } = this.props;
    const medal = this.props["highest medal achieved"];

    console.log(this.props.key);

    return (
      <div className="card">
        <div className="image">
          <img
            src={require(`../hog-imgs/${name
              .toLowerCase()
              .split(" ")
              .join("_")}.jpg`)}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">this is a hog</div>
        </div>
        {this.state.showDetails && (
          <div className="extra content">
            <span className="right floated">Weight: {weight}</span>
            <span>
              <i className="trophy icon"></i>
              {medal}
            </span>
            <span>
              <i className="trophy icon"></i>
              {greased ? "Greased" : "Not greased"}
            </span>
          </div>
        )}
        <button
          onClick={this.toggleShowDetails}
          className={`ui ${
            this.state.showDetails ? "secondary" : "primary"
          } button`}
        >
          {this.state.showDetails ? "Hide details" : "Show details"}
        </button>
      </div>
    );
  }
}

export default HogCard;
