import React from "react";
import { AddToDo } from "./Components/AddToDo";
import { List } from "./Components/List";

export class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render = () => {
    return (
      <div>
        <h2>ToDoApp</h2>
        <AddToDo addToDo={this.addToDo} />
        <List todos={this.state.todos} removeToDo={this.removeToDo} />
      </div>
    );
  };

  addToDo = title => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.nextId + 1, title: title }],
      nextId: this.state.nextId + 1
    });
  };

  removeToDo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
