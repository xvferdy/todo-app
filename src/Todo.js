import React from "react";

import "./App.css";

class Todo extends React.Component {
  handleRemove = () => {
    this.props.remove(this.props.id);
  };

  render() {
    return (
      <div className="Todo">
        <button>Edit</button>
        <button onClick={this.handleRemove}>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
