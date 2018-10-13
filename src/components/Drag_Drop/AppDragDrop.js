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

  onDragStart = (e, name) => {
    e.dataTransfer.setData("id", name);
  };

  onDragOver = e => {
    e.preventDefault();
  };

  onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter(task => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  };

  render() {
    const tasks = {
      wip: [],
      complete: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });
    return (
      <div className="drag-drop-container">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div
          className="wip"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "wip")}
        >
          <span className="task-header"> WIP</span>
          {tasks.wip}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "complete")}
        >
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}

export default AppDrapDrop;
