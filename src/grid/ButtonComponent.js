import React from "react";
import { setPreviousData } from "./gridActions";
import { connect } from "react-redux";
import usePrevious from "./hooks";

const ButtonComponent = (props) => {
  const { grid } = props;

  const newGrid = JSON.parse(JSON.stringify(grid));
  const prevGrid = usePrevious(newGrid);
  const handleClick = (event) => {
    event.preventDefault();
    props.setPreviousData(prevGrid);
  };

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Back</button>
    </div>
  );
};

const dispatchActions = {
  setPreviousData
};

export default connect(null, dispatchActions)(ButtonComponent);
