import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Globalstyle } from "./Globalstyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>
);
