import React from "react";

const SortAndFilterOptions = props => {
  return (
    <div>
      <button onClick={props.toggleGreasedOnly} className="ui button">
        {props.greasedOnly ? "SHow all" : "Show greased only"}
      </button>
      <div className="ui buttons">
        <button
          onClick={() => props.setSortType("DEFAULT")}
          className={`ui button ${
            props.sortType === "DEFAULT" ? "positive" : ""
          }`}
        >
          Default
        </button>
        <div className="or" data-text="ou"></div>
        <button
          onClick={() => props.setSortType("ABC")}
          className={`ui button ${props.sortType === "ABC" ? "positive" : ""}`}
        >
          Alpha
        </button>
        <div className="or" data-text="ou"></div>
        <button
          onClick={() => props.setSortType("WEIGHT")}
          className={`ui button ${
            props.sortType === "WEIGHT" ? "positive" : ""
          }`}
        >
          Weight
        </button>
      </div>
    </div>
  );
};

export default SortAndFilterOptions;
