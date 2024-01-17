import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/configureStore.js";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import api from "./store/rtk.js";

// const store = configStore;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
