import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./App.css";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Beli keybord" }, { task: "Belajar hooks" }],
    };
  }

  //object state dari form
  createTodo = (obj) => {
    this.setState((st) => ({
      todos: [...st.todos, obj],
    }));
  };

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <NewTodoForm newTodo={this.createTodo} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
