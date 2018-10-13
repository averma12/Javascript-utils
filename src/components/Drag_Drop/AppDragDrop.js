import React, { Component } from "react";
import "./AppDragDrop.css";

class AppDrapDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
        { name: "React", category: "wip", bgcolor: "pink" },
        { name: "Vue", category: "complete", bgcolor: "skyblue" }
      ]
    };
  }

  render() {
    return (
      <div className="drag-drop-container">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div className="wip">WIP</div>
        <div className="droppable">COMPLETED</div>
      </div>
    );
  }
}

export default AppDrapDrop;
