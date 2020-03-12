import React, { useEffect } from "react";
import Workout from "./Workout";

const WorkoutList = ({ workouts, deleteWorkout }) => {
  return (
    <div className="sidebar list">
      {workouts.map(workout => (
        <Workout
          key={workout.id}
          {...workout}
          deleteWorkout={() => deleteWorkout(workout.id)}
        />
      ))}
    </div>
  );
};

export default WorkoutList;
