import React from "react";
import { AddToDo } from "./Components/AddToDo";
import { List } from "./Components/List";

export class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <h2>ToDoApp</h2>
        <AddToDo />
        <List />
      </div>
    );
  };
}
