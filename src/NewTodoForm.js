import React from "react";

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
    this.props.newTodo(this.state);
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
