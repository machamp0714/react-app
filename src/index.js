import React from "react";
import { render } from "react-dom";
// import { TodoApp } from "./TodoApp";
import axios from "axios";

// render(<TodoApp />, document.getElementById("root"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { member: [] };
  }

  render() {
    return (
      <div>
        <button onClick={this.getJson}>get json</button>
        {this.memberList(this.state.member)}
      </div>
    );
  }

  memberList = list => {
    const memberList = list.map((member, index) => {
      return (
        <li>
          {index} {member.name} {member.age}
        </li>
      );
    });

    return <ul>{memberList}</ul>;
  };

  getJson = () => {
    const url = "https://api.myjson.com/bins/6bjx9";

    axios.get(url).then(res => {
      this.setState(res.data);
    });
  };
}

render(<App />, document.getElementById("root"));
