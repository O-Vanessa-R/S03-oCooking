import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/normallize.scss";
import "./assets/styles/main.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.Fragment>,
);
