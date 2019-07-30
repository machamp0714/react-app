import React from "react";
import { render } from "react-dom";

const todos = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
  { id: 3, title: "title3" },
  { id: 4, title: "title4" }
];

const deletedTargetId = 3;

const deletedArray = todos.filter(todo => todo.id !== deletedTargetId);

console.log(deletedArray);
