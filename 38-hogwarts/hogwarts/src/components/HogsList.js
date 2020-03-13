import React from "react";
import HogCard from "./HogCard";

const HogsList = props => {
  return (
    <div className="ui cards">
      {props.hogs.map(hog => {
        return <HogCard key={hog.name} {...hog} />;
      })}
    </div>
  );
};

export default HogsList;
