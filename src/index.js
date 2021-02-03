import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import GridComponent from "./grid/GridComponent";
import * as reducers from "./reducers";

const rootElement = document.getElementById("root");
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <GridComponent />
  </Provider>,
  rootElement
);
