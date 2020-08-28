import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./App.css";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  //object state dari form
  createTodo = (obj) => {
    this.setState((st) => ({
      todos: [...st.todos, obj],
    }));
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        remove={this.removeTodo}
      />
    ));
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
