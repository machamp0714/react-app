import React from "react";
import { AddToDo } from "./Components/AddToDo";
import { List } from "./Components/List";

export class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, title: "title0" },
        { id: 1, title: "title1" },
        { id: 2, title: "title2" }
      ],
      nextId: 0
    };
  }

  render = () => {
    return (
      <div>
        <h2>ToDoApp</h2>
        <AddToDo />
        <List todos={this.state.todos} />
      </div>
    );
  };
}
