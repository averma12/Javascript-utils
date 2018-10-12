import React, { Component } from "react";

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
      <div className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div className="wip" />
        <div className="droppable" />
      </div>
    );
  }
}

export default AppDrapDrop;
