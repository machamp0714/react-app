import React from "react";
import { AddTodo } from "./Components/AddTodo";
import { List } from "./Components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} />
      </div>
    );
  }

  addTodo = title => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.nextId, title: title }],
      nextId: this.state.nextId + 1
    });
  };
}
