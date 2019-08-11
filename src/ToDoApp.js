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
    const { todos } = this.state;
    return (
      <div>
        <h2>ToDoApp</h2>
        <AddToDo addToDo={this.addToDo} />
        <List todos={todos} removeToDo={this.removeToDo} />
      </div>
    );
  };

  addToDo = title => {
    const { todos, nextId } = this.state;
    this.setState({
      todos: [...todos, { id: nextId + 1, title: title }],
      nextId: nextId + 1
    });
  };

  removeToDo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
