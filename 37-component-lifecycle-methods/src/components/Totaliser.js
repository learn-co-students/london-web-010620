import React from "react";

class Totaliser extends React.Component {
  constructor() {
    super();

    console.log("totaliser", "constructor");
  }

  state = {
    increase: false,
    decrease: false
  };

  componentDidMount() {
    console.log("totaliser did mount");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.total < this.props.total - 50) {
      this.setState({
        increase: true
      });
      this.timeout = setTimeout(() => this.setState({ increase: false }), 5000);
    } else if (prevProps.total > this.props.total) {
      this.setState({
        decrease: true
      });
      this.timeout = setTimeout(() => this.setState({ decrease: false }), 5000);
    }
  }

  componentWillUnmount() {
    console.log(this.timeout);
    clearTimeout(this.timeout);
  }

  render() {
    console.log("totaliser", "render");
    return (
      <div
        className={`totaliser ${
          this.state.increase
            ? "pulse-green"
            : this.state.decrease
            ? "pulse-red"
            : ""
        }`}
      >
        {this.props.total}kgs
      </div>
    );
  }
}

export default Totaliser;
