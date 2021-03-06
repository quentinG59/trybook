import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
//dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = configureStore({
  reducer: {},
  middleware: [thunk, logger],
  composeWithDevTools,
  preloadedState: {
    rootReducer: {
      userReducer: null,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
