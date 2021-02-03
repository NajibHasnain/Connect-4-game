import axios from "axios";
import createAction from "../common/createAction";

import {
  UPDATE_GRID,
  GET_EMPLOYEES_DETAIL_SUCCESS,
  GET_EMPLOYEES_DETAIL_FAILURE,
  SET_PRIVIOUS_DATA
} from "./gridConstants";

const setPreviousData = (array) => {
  return createAction(SET_PRIVIOUS_DATA, { array });
};

const updateGrid = (array, count) => {
  return (dispatch) => {
    dispatch(createAction(UPDATE_GRID, { array, count }));

    return axios
      .get("https://run.mocky.io/v3/7c16feea-78d1-4a5d-a99c-93b374517edf")
      .then(
        (employees) => {
          return dispatch(
            createAction(GET_EMPLOYEES_DETAIL_SUCCESS, {
              employeeDetails: employees.data.data
            })
          );
        },
        (err) => dispatch(createAction(GET_EMPLOYEES_DETAIL_FAILURE, err))
      );
  };
};

export { updateGrid, setPreviousData };
