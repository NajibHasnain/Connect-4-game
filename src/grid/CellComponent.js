import React from "react";
import { connect } from "react-redux";
import { updateGrid } from "./gridActions";

const CellComponent = (props) => {
  const { gridArray, row, column, count } = props || {};

  const handleClick = (event) => {
    event.preventDefault();
    if (
      ((row === 2 && (column === 0 || column === 1 || column === 2)) ||
        (row < 2 && gridArray[row + 1][column] !== 0)) &&
      gridArray[row][column] === 0
    ) {
      let clickCount = count + 1;
      let newArray = [...gridArray];
      if (clickCount % 2 === 0) {
        newArray[row][column] = 2;
      } else {
        newArray[row][column] = 1;
      }
      props.updateGrid(newArray, clickCount);
    }
  };

  let cellClass = `cell player-${gridArray[row][column]}`;

  return <div className={cellClass} onClick={(e) => handleClick(e)}></div>;
};

const dispatchActions = {
  updateGrid
};

export default connect(null, dispatchActions)(CellComponent);
