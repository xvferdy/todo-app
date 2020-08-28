import React from "react";

import "./App.css";

class Todo extends React.Component {
  render() {
    return (
      <div className="Todo">
        <button>Edit</button>
        <button>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
