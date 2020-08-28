import React from "react";

import "./App.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
  }
  handleRemove = () => {
    this.props.remove(this.state.id);
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
