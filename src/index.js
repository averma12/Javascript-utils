import React from "react";
import ReactDOM from "react-dom";
import AppDrapDrop from "../src/components/Drag_Drop/AppDragDrop";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AppDrapDrop />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
