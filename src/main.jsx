import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";

// import { HelloWorkApp } from "./HelloWorkApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp /> */}
    <CounterApp value={92} />
  </React.StrictMode>
);
