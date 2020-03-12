import React from "react";
import "./App.css";
import WorkoutList from "./components/WorkoutList";
import WorkoutsForm from "./components/WorkoutsForm";

class App extends React.Component {
  state = {
    workouts: []
  };

  deleteWorkout = id =>
    this.setState({
      workouts: this.state.workouts.filter(workout => workout.id !== id)
    });

  addWorkouts = newWorkouts =>
    this.setState({
      workouts: [...this.state.workouts, ...newWorkouts]
    });

  render() {
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
