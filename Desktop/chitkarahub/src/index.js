import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { MaterialGrid } from "./MaterialGrid";

function App() {
  return (
    <div className="App">
      <MaterialGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
