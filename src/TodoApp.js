import React from "react";
import { AddTodo } from "./Components/AddTodo";
import { List } from "./Components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo />
        <List />
      </div>
    );
  }
}
