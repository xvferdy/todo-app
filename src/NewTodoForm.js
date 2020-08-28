import React from "react";
import { v4 as uuidv4 } from "uuid";

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const todoId = { ...this.state, id: uuidv4(), completed: false }; //add new props, id & complete
    this.props.newTodo(todoId); //pass the id
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
