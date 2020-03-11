import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div className="tasks">
        <h5>Task list</h5>
        <div>
          {this.props.tasks.map(task => (
            <Task task={task} />
          ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
