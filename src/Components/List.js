import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { todos, removeToDo } = this.props;
    const list = todos.map(todo => {
      return (
        // 配列を使う場合はuniqueなkeyを持たせるひつようがある。
        <li key={todo.id}>
          {todo.id} {todo.title}{" "}
          <button
            onClick={() => {
              removeToDo(todo.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  };
}
