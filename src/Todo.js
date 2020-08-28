import React from "react";
import "./App.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task, //repopulate
    };
  }

  handleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    //take new task and pass up to parent
    this.props.edit(this.props.id, this.state.task);

    this.setState({
      isEditing: false,
      task: "",
    });
  };

  handleRemove = () => {
    this.props.remove(this.props.id);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button onClick={this.handleUpdate}>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
