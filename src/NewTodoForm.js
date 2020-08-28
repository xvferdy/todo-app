import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const todoId = { ...this.state, id: uuidv4() }; //passing new props, id
    this.props.newTodo(todoId);
    this.setState({
      task: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input
            id="task"
            name="task"
            type="text"
            placeholder="New Todo"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
