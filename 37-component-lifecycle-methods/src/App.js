import React from "react";
import "./App.css";
import WorkoutList from "./components/WorkoutList";
import WorkoutsForm from "./components/WorkoutsForm";

class App extends React.Component {
  constructor() {
    super();
    console.log("app", "constructor");
  }
  state = {
    workouts: []
  };

  componentDidMount() {
    console.log("add did mount");

    fetch("http://localhost:3001/workouts")
      .then(res => res.json())
      .then(workouts => {
        console.log("add setting state");
        this.setState({ workouts });
      });
  }

  deleteWorkout = id =>
    this.setState({
      workouts: this.state.workouts.filter(workout => workout.id !== id)
    });

  addWorkouts = newWorkouts =>
    this.setState({
      workouts: [...this.state.workouts, ...newWorkouts]
    });

  render() {
    console.log("app", "render");
    return (
      <div className="App">
        {this.state.workouts.length > 0 ? (
          <WorkoutList
            workouts={this.state.workouts}
            deleteWorkout={this.deleteWorkout}
          />
        ) : (
          <div>no workouts loaded</div>
        )}

        <WorkoutsForm submitWorkouts={this.addWorkouts} />
      </div>
    );
  }
}

export default App;
