import {
  GET_EMPLOYEES_DETAIL_SUCCESS,
  GET_EMPLOYEES_DETAIL_FAILURE,
  UPDATE_GRID,
  SET_PRIVIOUS_DATA
} from "./gridConstants";

const initialState = {
  gridArray: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  employeeDetails: [],
  count: 0,
  error: []
};

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GRID:
      return {
        ...state,
        gridArray: JSON.parse(JSON.stringify(action.data.array)),
        count: action.data.count
      };
    case GET_EMPLOYEES_DETAIL_SUCCESS:
      return {
        ...state,
        employeeDetails: [
          ...state.employeeDetails,
          action?.data?.employeeDetails[
            Math.floor(Math.random() * action?.data?.employeeDetails.length)
          ]
        ]
      };
    case GET_EMPLOYEES_DETAIL_FAILURE:
      return {
        ...state,
        error: [action.data.error]
      };
    case SET_PRIVIOUS_DATA:
      return {
        ...state,
        employeeDetails: state.employeeDetails?.slice(0, -1),
        gridArray: action.data.array,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default gridReducer;
