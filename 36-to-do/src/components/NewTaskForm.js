import React from "react";

class NewTaskForm extends React.Component {
  state = {
    text: "gtgdt",
    category: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state.text, this.state.category);
    this.setState({
      text: ""
    });
  };

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleCategoryChange = event => {
    this.setState({
      category: event.target.value
    });
  };

  render() {
    return (
      <form className="new-task-form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleTextChange}
          value={this.state.text}
          type="text"
          placeholder="New task details..."
        />
        <select onChange={this.handleCategoryChange}>
          {this.props.categories.map(category => {
            return <option value={category}>{category}</option>;
          })}
        </select>
        <input type="submit" value="Add task" />
      </form>
    );
  }
}

export default NewTaskForm;
