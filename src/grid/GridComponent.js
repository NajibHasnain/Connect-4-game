import React, { useState, useEffect } from "react";
import CellComponent from "./CellComponent";
import "../styles.css";
import { connect } from "react-redux";
import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import ButtonComponent from "./ButtonComponent";

const GridComponent = (props) => {
  const { gridArray, employeeDetails, count } = props;
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(gridArray);
  }, [gridArray]);

  return (
    <div className="container">
      <div className="item">
        <div className="grid">
          {grid?.map((arr, i, gridArray) =>
            arr.map((el, j) => {
              return (
                <CellComponent
                  key={j}
                  gridArray={gridArray}
                  row={i}
                  column={j}
                  count={count}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="item">
        <ButtonComponent grid={grid} />
        <div>
          <ul className="employees">
            {employeeDetails?.map((el) => {
              return <EmployeeDetailsComponent employees={el} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gridArray: state.gridReducer.gridArray,
    employeeDetails: state.gridReducer.employeeDetails,
    count: state.gridReducer.count
  };
};

export default connect(mapStateToProps, null)(GridComponent);
